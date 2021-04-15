    document.addEventListener('DOMContentLoaded', (event) => {
        if (event) {
            console.info('DOM loaded');
        }
    
        // Update
        const devourBtns = document.querySelectorAll('a');
        if (devourBtns) {
            devourBtns.forEach((button) => {
                // Set up the event listener for each of the devour buttons
                button.addEventListener('click', (e) => {
                    const id = e.target.getAttribute('data-id');
                    const yesDevoured = e.target.getAttribute('data-devoured');
    
                    const devourState = {
                        devoured: yesDevoured,
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
    
        // Create
        const addBurger = document.getElementById('create-form');
    
        if (addBurger) {
            addBurger.addEventListener('submit', (e) => {
                e.preventDefault();
                // var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=r0HsrTb1KOt1jr8cerWbKrNLoFPTQOmg";
                
                // $.ajax({
                //   url: queryURL,
                //   method: "GET"
                // }).then(function(response) {
                //   console.log(response);
                //   $("body").append("<img src='" + response.images.fixed_width.url + "'>")
                // });
    
                const newBurger = {
                    burger_name: document.getElementById('bu').value.trim(),
                }
    
                fetch('/api/burgers', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newBurger),
                }).then(() => {
                    document.getElementById('bu').value = '';
    
                    location.reload('/');

                });
            });
        }
    });