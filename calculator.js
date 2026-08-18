(function () {
    // Tax Rates 2024-25 (Stage 3 cuts)
    const taxBrackets = [
        { min: 0,      max: 18200,   rate: 0,    fixed: 0 },
        { min: 18200,  max: 45000,   rate: 0.16, fixed: 0 },
        { min: 45000,  max: 135000,  rate: 0.30, fixed: 4288 },
        { min: 135000, max: 190000,  rate: 0.37, fixed: 31288 },
        { min: 190000, max: Infinity,rate: 0.45, fixed: 51638 }
    ];

    let superMode    = 'top';
    let familyStatus = 'single';
    const superRate  = 0.12;
    let currentResults = {};

    function formatCur(val) {
        return new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD' }).format(val);
    }

    window.setSuperMode = function (mode) {
        superMode = mode;
        document.getElementById('btn-super-top').classList.toggle('active', mode === 'top');
        document.getElementById('btn-super-inc').classList.toggle('active', mode === 'inclusive');
        document.getElementById('super-text').innerText = mode === 'top' ? 'on top of' : 'included in';
        window.calculate();
    };

    window.setFamilyStatus = function (status) {
        familyStatus = status;
        document.getElementById('btn-fam-single').classList.toggle('active', status === 'single');
        document.getElementById('btn-fam-couple').classList.toggle('active', status === 'couple');
        const depGroup = document.getElementById('dependants-group');
        if (depGroup) depGroup.style.display = status === 'couple' ? 'block' : 'none';
        window.calculate();
    };

    window.switchTab = function (tabName) {
        ['summary', 'detailed'].forEach(function (t) {
            document.getElementById('tab-' + t).classList.remove('active');
            document.getElementById('tab-btn-' + t).classList.remove('active');
        });
        document.getElementById('tab-' + tabName).classList.add('active');
        document.getElementById('tab-btn-' + tabName).classList.add('active');
    };


    window.copyResults = function () {
        if (!currentResults.gross) return;
        var text = 'Salary Calculation:\n' +
            'Gross Salary: '         + formatCur(currentResults.gross)       + '\n' +
            'Base Salary: '          + formatCur(currentResults.base)        + '\n' +
            'Take-Home Pay: '        + formatCur(currentResults.net)         + '\n' +
            'Total Tax & Deductions: '+ formatCur(currentResults.deductions) + '\n' +
            'Superannuation: '       + formatCur(currentResults.super)       + '\n' +
            'Effective Tax Rate: '   + currentResults.effRate + '%\n' +
            'Marginal Tax Rate: '    + currentResults.marRate + '%';
        navigator.clipboard.writeText(text)
            .then(function () { alert('Results copied to clipboard!'); })
            .catch(function ()  { alert('Failed to copy results.'); });
    };

    window.calculate = function () {
        var inputEl = document.getElementById('asc-salary');
        if (!inputEl) return;
        var inputVal = parseFloat(inputEl.value) || 0;

        var basis          = document.getElementById('asc-basis').value;
        var freqMultiplier = parseFloat(document.getElementById('asc-frequency').value) || 1;
        var hoursPerWeek   = parseFloat(document.getElementById('asc-hours').value) || 38;

        document.getElementById('hours-group').style.display = basis === 'hourly' ? 'block' : 'none';

        var hasHecs        = document.getElementById('asc-hecs').checked;
        var medicareExempt = document.getElementById('asc-medicare-exemption').checked;
        var isSapto        = document.getElementById('asc-sapto').checked;

        var annualVal = inputVal;
        if      (basis === 'monthly')     annualVal = inputVal * 12;
        else if (basis === 'fortnightly') annualVal = inputVal * 26;
        else if (basis === 'weekly')      annualVal = inputVal * 52;
        else if (basis === 'daily')       annualVal = inputVal * 260;
        else if (basis === 'hourly')      annualVal = inputVal * hoursPerWeek * 52;

        var gross       = annualVal;
        var superAmount = 0;
        var baseSalary  = annualVal;

        if (superMode === 'inclusive') {
            gross       = annualVal / (1 + superRate);
            superAmount = annualVal - gross;
            baseSalary  = gross;
        } else {
            superAmount = gross * superRate;
        }

        var otherIncome    = parseFloat((document.getElementById('asc-other-income')    || {}).value) || 0;
        var workDeductions = parseFloat((document.getElementById('asc-work-deductions') || {}).value) || 0;
        var taxableIncome  = Math.max(0, gross + otherIncome - workDeductions);

        var rawTax     = 0;
        var marginalRate = 0;
        for (var i = 0; i < taxBrackets.length; i++) {
            var b = taxBrackets[i];
            if (taxableIncome > b.min) {
                var taxableAtThis = Math.min(taxableIncome - b.min, b.max - b.min);
                if (taxableIncome <= b.max) {
                    rawTax       = b.fixed + (taxableAtThis * b.rate);
                    marginalRate = b.rate * 100;
                    break;
                }
            }
        }

        var saptoOffset = 0;
        if (isSapto) {
            var maxOffset = familyStatus === 'single' ? 2230 : 1602;
            var threshold = familyStatus === 'single' ? 32279 : 28974;
            saptoOffset = taxableIncome <= threshold
                ? maxOffset
                : Math.max(0, maxOffset - ((taxableIncome - threshold) * 0.125));
        }
        var tax = Math.max(0, rawTax - saptoOffset);

        var medicare = 0;
        if (!medicareExempt && taxableIncome > 26000) {
            medicare      = taxableIncome * 0.02;
            marginalRate += 2;
        }

        var hecs = 0;
        if (hasHecs && taxableIncome > 54435) {
            hecs         = taxableIncome * 0.05;
            marginalRate += 5;
        }

        var totalDeductions = tax + medicare + hecs;
        var takeHome        = gross - totalDeductions;
        var effectiveRate   = gross > 0 ? (totalDeductions / gross) * 100 : 0;

        var dispGross      = gross / freqMultiplier;
        var dispTakeHome   = takeHome / freqMultiplier;
        var dispDeductions = totalDeductions / freqMultiplier;
        var dispSuper      = superAmount / freqMultiplier;

        currentResults = {
            gross:      dispGross,
            base:       baseSalary / freqMultiplier,
            net:        dispTakeHome,
            deductions: dispDeductions,
            super:      dispSuper,
            effRate:    effectiveRate.toFixed(1),
            marRate:    marginalRate.toFixed(1)
        };

        document.getElementById('val-gross').innerText      = formatCur(dispGross);
        document.getElementById('val-takehome').innerText   = formatCur(dispTakeHome);
        document.getElementById('val-deductions').innerText = formatCur(dispDeductions);
        document.getElementById('val-effective').innerText  = effectiveRate.toFixed(1) + '%';
        document.getElementById('val-marginal').innerText   = marginalRate.toFixed(1) + '%';
        document.getElementById('chart-val').innerText      = formatCur(dispTakeHome).split('.')[0];

        updateChart(gross, tax + hecs, medicare, takeHome);
        updateBreakdown(
            gross / freqMultiplier,
            baseSalary / freqMultiplier,
            rawTax / freqMultiplier,
            saptoOffset / freqMultiplier,
            medicare / freqMultiplier,
            hecs / freqMultiplier,
            totalDeductions / freqMultiplier,
            takeHome / freqMultiplier
        );
        updateTable(gross, totalDeductions, takeHome);
    };

    function updateBreakdown(gross, base, tax, sapto, medicare, hecs, totalDeductions, net) {
        var html = '<tr><td>Gross Salary</td><td>' + formatCur(gross) + '</td></tr>' +
                   '<tr><td>Taxable Income (Base Salary)</td><td>' + formatCur(base) + '</td></tr>' +
                   '<tr class="asc-breakdown-row"><td>Income Tax (Gross)</td><td>-' + formatCur(tax) + '</td></tr>';
        if (sapto > 0) {
            html += '<tr><td>SAPTO Tax Offset</td><td style="color:var(--chart-super);">+' + formatCur(sapto) + '</td></tr>';
        }
        var netTax = Math.max(0, tax - sapto);
        html += '<tr class="asc-breakdown-row"><td>Net Income Tax</td><td>-' + formatCur(netTax) + '</td></tr>';
        if (medicare > 0) {
            html += '<tr class="asc-breakdown-row"><td>Medicare Levy (2%)</td><td>-' + formatCur(medicare) + '</td></tr>';
        }
        if (hecs > 0) {
            html += '<tr class="asc-breakdown-row"><td>HECS / HELP Repayment</td><td>-' + formatCur(hecs) + '</td></tr>';
        }
        html += '<tr class="asc-breakdown-total"><td>Take-Home Pay</td><td style="color:var(--accent-primary);">' + formatCur(net) + '</td></tr>';
        var tbody = document.getElementById('table-breakdown');
        if (tbody) tbody.innerHTML = html;
    }

    function updateChart(gross, tax, medicare, takeHome) {
        if (gross === 0) return;
        var taxPct = (tax      / gross) * 100;
        var medPct = (medicare / gross) * 100;
        var p1 = taxPct;
        var p2 = p1 + medPct;
        var donut = document.getElementById('asc-donut');
        if (donut) {
            donut.style.background =
                'conic-gradient(var(--chart-tax) 0% ' + p1 + '%, var(--chart-medicare) ' +
                p1 + '% ' + p2 + '%, var(--chart-takehome) ' + p2 + '% 100%)';
        }
    }

    function updateTable(gross, tax, net) {
        var periods = [
            { name: 'Annual',      d: 1    },
            { name: 'Monthly',     d: 12   },
            { name: 'Fortnightly', d: 26   },
            { name: 'Weekly',      d: 52   },
            { name: 'Daily',       d: 260  },
            { name: 'Hourly',      d: 1976 }
        ];
        var html = '';
        periods.forEach(function (p) {
            html += '<tr><td>' + p.name + '</td><td>' + formatCur(gross / p.d) +
                    '</td><td>' + formatCur(tax / p.d) +
                    '</td><td style="font-weight:700;color:var(--text-main);">' +
                    formatCur(net / p.d) + '</td></tr>';
        });
        var tbody = document.getElementById('table-periods');
        if (tbody) tbody.innerHTML = html;
    }

    window.resetDefaults = function () {
        document.getElementById('asc-salary').value    = 80000;
        document.getElementById('asc-basis').value     = 'annually';
        document.getElementById('asc-frequency').value = '1';
        document.getElementById('asc-hours').value     = 38;
        window.setSuperMode('top');
        window.setFamilyStatus('single');
        ['asc-dependants','asc-other-income','asc-work-deductions'].forEach(function (id) {
            var el = document.getElementById(id);
            if (el) el.value = 0;
        });
        ['asc-hecs','asc-medicare-exemption','asc-sapto'].forEach(function (id) {
            document.getElementById(id).checked = false;
        });
        window.calculate();
    };


    document.addEventListener('DOMContentLoaded', window.calculate);
    setTimeout(window.calculate, 100);
}());
