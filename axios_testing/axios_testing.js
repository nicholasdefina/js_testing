
// try fetching before playing with axios. comparing to each other.
function doRequest (url) {
    return fetch(url)
        .then((res) => {
            if (!res.ok || res.status !== 200) {
                throw new Error(res.status);
            }
            return res.json()
        }) 
}


// just 20 being returned for now. exhausting next in the axios async func below
const returnPlanets = () => {
    let allPlanets = []
    doRequest('https://swapi.dev/api/planets/')
    .then(({ next, results }) => {
        allPlanets = results;
        return doRequest(next)
    })
    .then((res) => {
        allPlanets = [...allPlanets, ...res.results];
        console.log(allPlanets);
    })
    .catch((e) => {
        console.log('Error: ', e)
    });
}

const findLukeBySurname = () => {
    return doRequest('https://swapi.dev/api/people/?search=Skywalker')
    .then((res) => {
        const luke = res.results.find((person) => {
            return person.name === 'Luke Skywalker';
        });
        const lastName = luke.name.split(' ')[1];
        console.log(`I have you now, young ${lastName}`);
    })
}

// AXIOS does two big things.
// 1: parses the data for you. does the res.json() work. throws everything in 'data' key
// 2: checks status codes automatically. if not 200 ok, throws error
const axiosFindLukeBySurname = () => {
    return axios.get('https://swapi.dev/api/people/?search=Skywalker')
    .then(({data}) => {
        const luke = data.results.find((person) => {
            return person.name === 'Luke Skywalker';
        });
        const lastName = luke.name.split(' ')[1];
        console.log(`I have you now, young ${lastName}`);
    })
}


function doRequestAsync (url) {
    return axios.get(url); 
}

async function axiosReturnAllPlanets() {
    let allPlanets = []
    let {data} = await doRequestAsync('https://swapi.dev/api/planets/')
    allPlanets = data.results;
    let next = data.next;
    while (next) {
        let {data: newData} = await doRequestAsync(next);
        allPlanets = [...allPlanets, ...newData.results];
        next = newData.next;
    }
    console.log(allPlanets);
}


// findLukeBySurname();
// returnPlanets();
// axiosFindLukeBySurname();
// axiosReturnAllPlanets().catch((err) => console.log(err)); // ASYNC/AWAIT play


// sends off in parallel. cool beans.
async function getFivePeople() {
    const prom1 = axios.get('https://swapi.dev/api/people/1/');
    const prom2 = axios.get('https://swapi.dev/api/people/1/');
    const prom3 = axios.get('https://swapi.dev/api/people/1/');
    const prom4 = axios.get('https://swapi.dev/api/people/1/');
    const prom5 = axios.get('https://swapi.dev/api/people/1/');
    const results = await Promise.all([prom1, prom2, prom3, prom4, prom5])

    console.log(results)
}

getFivePeople().catch((e) => console.log('error is ', e));