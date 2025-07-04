
                function loadMarkdown(file) {
                    fetch(file)
                        .then(response => {
                            if (!response.ok) {
                                throw new Error('Network response was not ok');
                            }
                            return response.text();
                        })
                        .then(data => {
                            document.getElementById('content').innerHTML = marked(data);
                            document.getElementById('links').style.display = 'none'; // Hide links
                            document.getElementById('back-button').style.display = 'block'; // Show back button
                        })
                        .catch(error => {
                            console.error('There was a problem with the fetch operation:', error);
                        });
                }

                function goBack() {
                    document.getElementById('content').innerHTML = ''; // Clear content
                    document.getElementById('links').style.display = 'block'; // Show links
                    document.getElementById('back-button').style.display = 'none'; // Hide back button
                }
