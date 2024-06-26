
    // JavaScript to ensure only one radio button is selected
    const agentYes = document.getElementById('agentYes');
    const agentNo = document.getElementById('agentNo');

    agentYes.addEventListener('change', function() {
        agentNo.checked = !this.checked;
    });

    agentNo.addEventListener('change', function() {
        agentYes.checked = !this.checked;
    });
