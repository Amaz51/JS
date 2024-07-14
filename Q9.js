//Write a sync and Async funtion to fetch data from 3 APIs with delays 10000, 5000 and 7000 respectively.

function asyncfetch() {
    let promise1 = fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json());
    let promise2 = fetch('https://jsonplaceholder.typicode.com/todos/2')
        .then(response => response.json());
    let promise3 = fetch('https://jsonplaceholder.typicode.com/todos/3')
        .then(response => response.json());

    return Promise.all([promise1, promise2, promise3])
        .then((values) => {
            console.log(values);
            return values;
        })
        .catch((error) => {
            console.error(error);
            return [];
        });
}
asyncfetch();