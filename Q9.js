//Write a sync and Async funtion to fetch data from 3 APIs with delays 10000, 5000 and 7000 respectively.

async function fetchDataAsync() {
    const fetchApi1 = new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data from API 1');
        }, 10000);
    });

    const fetchApi2 = new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data from API 2');
        }, 5000);
    });

    const fetchApi3 = new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data from API 3');
        }, 7000);
    });

    try {
        const data1 = await fetchApi1;
        console.log(data1);

        const data2 = await fetchApi2;
        console.log(data2);

        const data3 = await fetchApi3;
        console.log(data3);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchDataAsync();
