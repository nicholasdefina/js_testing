
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

// just 20 being returned for now. maybe come back and play with to do in while loop until 'next' is exhausted
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

findLukeBySurname();
returnPlanets();
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

axiosFindLukeBySurname();

const axiosReturnPlanets = () => {
    let allPlanets = []
    return axios.get('https://swapi.dev/api/planets/')
    .then(({ data }) => {
        allPlanets = data.results;
        return axios.get(data.next);
    })
    .then(({data}) => {
        allPlanets = [...allPlanets, ...data.results];
        console.log(allPlanets);
    })
    .catch((e) => {
        console.log('Error: ', e)
    });
}

axiosReturnPlanets();