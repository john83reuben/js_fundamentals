const name = 'John';
const age = 37;
const job = 'Web Developer';
const city = 'Kajang';
let html;
let html5;

//Without template strings (es5)

//html = '<ul><li>Name: ' + name + ' </li><li>Age: ' + age + ' </li><li>Job: ' + job + ' </li><li>City: ' + city + ' </li></ul>';

html = '<ul>' +
        '<li>Name: ' + name + ' </li>' +
        '<li>Age: ' + age + ' </li>' +
        '<li>Job: ' + job + ' </li>' +
        '<li>City: ' + city + ' </li>' +
        '</ul>';

//document.body.innerHTML = html;

// With template strings(literals)

html5 = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City ${city}</li>
        <li>Age Desc: ${age > 30 ? 'Over 30':'Less 30'}</li>

    </ul>

`;

document.body.innerHTML = html5;