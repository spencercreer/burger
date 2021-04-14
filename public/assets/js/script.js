document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
        console.info('DOM loaded');
    }

    // Set up the event listener for the devour buttons
    const devourBtns = document.querySelectorAll('.devour-button');
    if (devourBtns) {
        devourBtns.forEach((button) => {
            button.addEventListener('click', (e) => {
                console.log('hello')
                const id = e.target.getAttribute('data-id');
                const newDevour = e.target.getAttribute('data-devoured');

                const devourState = {
                    devoured: newDevour,
                };

                fetch(`/api/burgers/${id}`, {
                    method: 'PUT',
                    headers: {
                        Accept: 'application/json', 'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(devourState)
                }).then((response) => {
                    location.reload('/');
                });
            });
        });
    }
})