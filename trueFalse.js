var fs = require('fs'),
    values = require('./value'),
    result = [],
    outputFilename, i, j;

for (i = 0, maxValue = values.length; i < maxValue; i++) {
    for (j = 0, maxEqual = values.length; j < maxEqual; j++) {
        result.push({
            value: values[i].label,
            method: '==',
            equal: values[j].label,
            result: values[i].value == values[j].value
        });

        result.push({
            value: values[i].label,
            method: '===',
            equal: values[j].label,
            result: values[i].value === values[j].value
        });
    }

    result.push({
        value: values[i].label,
        method: 'isNaN',
        result: isNaN(values[i].value)
    });

    result.push({
        value: values[i].label,
        method: 'isFinite',
        result: isFinite(values[i].value)
    });

    result.push({
        value: values[i].label,
        method: 'Array.isArray',
        result: Array.isArray(values[i].value)
    });

    result.push({
        value: values[i].label,
        method: 'typeof $1 === \'number\'',
        result: typeof values[i].value === 'number'
    });

    result.push({
        value: values[i].label,
        method: 'typeof $1 === \'string\'',
        result: typeof values[i].value === 'string'
    });

    result.push({
        value: values[i].label,
        method: 'typeof $1 === \'boolean\'',
        result: typeof values[i].value === 'boolean'
    });

    result.push({
        value: values[i].label,
        method: 'typeof $1 === \'undefined\'',
        result: typeof values[i].value === 'undefined'
    });

    result.push({
        value: values[i].label,
        method: 'typeof $1 === \'object\'',
        result: typeof values[i].value === 'object'
    });

    result.push({
        value: values[i].label,
        method: 'typeof $1 === \'function\'',
        result: typeof values[i].value === 'function'
    });
}

// Output
console.log(result);

outputFilename = 'README.md';

fs.writeFile(outputFilename, '```json' + JSON.stringify(result, null, 4) + '\t```', function(err) {
    if (err) {
        console.log('Error', err);
    } else {
        console.log('JSON saved to ' + outputFilename);
    }
});