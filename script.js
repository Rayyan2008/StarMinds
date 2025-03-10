// Tab Navigation
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs and screens
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        
        // Add active class to clicked tab
        tab.classList.add('active');
        
        // Show corresponding screen
        const screenId = tab.getAttribute('data-screen');
        document.getElementById(screenId).classList.add('active');
    });
});

// Modal handling
function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

function closeAllModals() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.remove('active');
    });
}

// Close modals when clicking the X button
document.querySelectorAll('.close-modal').forEach(button => {
    button.addEventListener('click', closeAllModals);
});

// Close modals when clicking outside the content
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', event => {
        if (event.target === modal) {
            closeAllModals();
        }
    });
});

// Show activity detail modal
document.getElementById('show-activity-detail').addEventListener('click', () => {
    openModal('activity-detail-modal');
});

// Show new goal modal
document.getElementById('show-new-goal').addEventListener('click', () => {
    openModal('new-goal-modal');
});

// Show onboarding modal
document.getElementById('show-onboarding').addEventListener('click', () => {
    openModal('onboarding-modal');
});