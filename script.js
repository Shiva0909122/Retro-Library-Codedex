
// // List of books
// const books = [
//     { title: "JavaScript for Beginners", author: "John Doe", borrowed: true },
//     { title: "HTML & CSS Design", author: "Jane Smith", borrowed: true },
//     { title: "Advanced React", author: "Chris Evans", borrowed: false },
//     { title: "Node.js Essentials", author: "Emily Blunt", borrowed: false },
//     { title: "Python for Data Science", author: "Alan Turing", borrowed: false }
// ];

// // Elements
// const searchInput = document.getElementById('search-input');
// const searchBtn = document.getElementById('search-btn');
// const searchResults = document.getElementById('search-results');

// // Search functionality
// searchBtn.addEventListener('click', () => {
//     const query = searchInput.value.toLowerCase().trim();
//     searchResults.innerHTML = ''; // Clear previous results

//     if (query === '') {
//         searchResults.innerHTML = '<p class="text-muted">Please enter a search query.</p>';
//         return;
//     }

//     // Filter books based on query
//     const filteredBooks = books.filter(book =>
//         book.title.toLowerCase().includes(query) ||
//         book.author.toLowerCase().includes(query)
//     );

//     if (filteredBooks.length === 0) {
//         searchResults.innerHTML = '<p class="text-muted">No books found. Try a different query.</p>';
//     } else {
//         const resultList = document.createElement('ul');
//         resultList.classList.add('list-group');

//         filteredBooks.forEach(book => {
//             const listItem = document.createElement('li');
//             listItem.classList.add('list-group-item');
//             listItem.textContent = `"${book.title}" by ${book.author}${book.borrowed ? ' (Borrowed)' : ''}`;
//             resultList.appendChild(listItem);
//         });

//         searchResults.appendChild(resultList);
//     }
// });


        // List of books
        const books = [
            { title: "JavaScript for Beginners", author: "John Doe", borrowed: true },
            { title: "HTML & CSS Design", author: "Jane Smith", borrowed: true },
            { title: "Advanced React", author: "Chris Evans", borrowed: false },
            { title: "Node.js Essentials", author: "Emily Blunt", borrowed: false },
            { title: "Python for Data Science", author: "Alan Turing", borrowed: false },
            { title: "Mastering Angular", author: "Sophia Turner", borrowed: false },
            { title: "Flask Web Development", author: "Alex Carter", borrowed: false },
            { title: "Django Deep Dive", author: "Liam Brown", borrowed: false },
            { title: "Kotlin for Android", author: "Ethan Davis", borrowed: true },
            { title: "Swift Programming", author: "Mia Wilson", borrowed: false },
            { title: "Go Programming Guide", author: "Isabella Moore", borrowed: false }
        ];

        const codingBooks = [
            { title: "HTML & CSS Design", author: "Jane Smith", image: "https://m.media-amazon.com/images/I/613ZTDcDsiL._AC_UF1000,1000_QL80_.jpg" },
            { title: "JavaScript for Beginners", author: "John Doe", image:"https://media4.giphy.com/media/SvFocn0wNMx0iv2rYz/giphy.webp?cid=790b7611q7s8hn7eqxail13br8i8673y7qimjefwv7v7pbuv&ep=v1_gifs_search&rid=giphy.webp&ct=g" },
            { title: "Flask Web Development", author: "Alex Carter", image: "https://m.media-amazon.com/images/I/51djSJpTN5L._SY445_SX342_.jpg" },   
            { title: "Node.js Essentials", author: "Emily Blunt", image: "https://miro.medium.com/v2/resize:fit:900/1*TY9uBBO9leUbRtlXmQBiug.png" },
            { title: "Advanced React", author: "Chris Evans", image: "https://cloudmatetechnologies.com/wp-content/uploads/2024/06/react.js.png" },         
            { title: "Python for Data Science", author: "Alan Turing", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGWSpWhsXCMe8yJgFFEtgkpMyJ7P554ehgxg&s" },
            { title: "Mastering Angular", author: "Sophia Turner", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9x8fsnxKFovjZIfUehsska9Bdijx2V9sZTKJPqXchOqSc5SExD9lOWboMdy9wOWycMv8&usqp=CAU" },
            { title: "Django Deep Dive", author: "Liam Brown", image: "https://realpython.com/cdn-cgi/image/width=960,format=auto/https://files.realpython.com/media/Get-Started-With-Django_Watermarked.15a1e05597bc.jpg" }
        ];

        // Elements
        const searchInput = document.getElementById('search-input');
        const searchBtn = document.getElementById('search-btn');
        const searchResults = document.getElementById('search-results');
        const codingBooksContainer = document.getElementById('coding-books-container');

        // Render coding books
        function renderCodingBooks() {
            codingBooks.forEach(book => {
                const col = document.createElement('div');
                col.classList.add('col-md-3', 'mb-4');

                const card = document.createElement('div');
                card.classList.add('card', 'h-100');

                const img = document.createElement('img');
                img.src = book.image;
                img.alt = book.title;
                img.classList.add('card-img-top');

                const cardBody = document.createElement('div');
                cardBody.classList.add('card-body');

                const title = document.createElement('h5');
                title.classList.add('card-title');
                title.textContent = book.title;

                const author = document.createElement('p');
                author.classList.add('card-text');
                author.textContent = `Author: ${book.author}`;

                cardBody.appendChild(title);
                cardBody.appendChild(author);
                card.appendChild(img);
                card.appendChild(cardBody);
                col.appendChild(card);
                codingBooksContainer.appendChild(col);
            });
        }

        // Search functionality
        searchBtn.addEventListener('click', () => {
            const query = searchInput.value.toLowerCase().trim();
            searchResults.innerHTML = ''; // Clear previous results

            if (query === '') {
                searchResults.innerHTML = '<p class="text-muted">Please enter a search query.</p>';
                return;
            }

            // Filter books based on query
            const filteredBooks = books.filter(book =>
                book.title.toLowerCase().includes(query) ||
                book.author.toLowerCase().includes(query)
            );

            if (filteredBooks.length === 0) {
                searchResults.innerHTML = '<p class="text-muted">No books found. Try a different query.</p>';
            } else {
                const resultList = document.createElement('ul');
                resultList.classList.add('list-group');

                filteredBooks.forEach(book => {
                    const listItem = document.createElement('li');
                    listItem.classList.add('list-group-item');
                    listItem.textContent = `"${book.title}" by ${book.author}${book.borrowed ? ' (Borrowed)' : ''}`;
                    resultList.appendChild(listItem);
                });

                searchResults.appendChild(resultList);
            }
        });

        // Initialize
        renderCodingBooks();
