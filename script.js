// Ensure script is loaded
console.log("Script loaded!");

// Ensure DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded!");

    // Tab Navigation
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => {
            console.log("Tab clicked:", tab.innerText);
            
            // Remove active class from all tabs and screens
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));

            // Activate clicked tab and corresponding screen
            tab.classList.add('active');
            document.getElementById(tab.getAttribute('data-screen')).classList.add('active');
        });
    });

    // Modal handling
    function openModal(modalId) {
        console.log("Opening modal:", modalId);
        document.getElementById(modalId).classList.add('active');
    }

    function closeAllModals() {
        console.log("Closing all modals");
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

    // Select the buttons safely
    const startButton = document.getElementById('show-onboarding');
    const challengeButton = document.querySelector('.secondary-btn');

    // Add event listeners if the buttons exist
    if (startButton) {
        startButton.addEventListener('click', () => {
            console.log("Get Started button clicked!");
            openModal('onboarding-modal');
        });
    }

    if (challengeButton) {
        challengeButton.addEventListener('click', () => {
            console.log("Accept Challenge button clicked!");
            alert("Challenge Accepted! 🎯");
        });
    }
});
