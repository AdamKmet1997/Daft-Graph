var express = require('express');
var router = express.Router();
const request = require('request');
const cheerio = require('cheerio');

router.get('/', function (req, res, next) {
  var area = req.params.area;
  console.log(area);
  res.render('home');
});

// router.post('/:area', function (req, res, next) {

//   var area = req.params.area;
//   console.log(area);
//   // res.render('home');

// });

/* GET home page. */
router.get('/blanchardstown', function (req, res, next) {
  var blach = 'blanchardstown';
  request('https://www.daft.ie/dublin-city/residential-property-for-rent/blanchardstown/?ad_type=rental&advanced=1&s%5Badvanced%5D=1&searchSource=rental', (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);

      var items = $('.price');
      items = items.text();
      for (var i = 0; i < items.length; i++) {
        items = items.replace(' Per', '');
        items = items.replace('month', '');
        items = items.replace('week', '');
        items = items.replace(',', '');
        items = items.replace('€', '');
        // items = items.replace(',', ' ');
        var arrayString = items.split(" ");


      }
      var sum = 0;
      for (var i = 0; i < arrayString.length; i++) {
        sum += arrayString[i]; //don't forget to add the base
      }
      var avg = sum / arrayString.length;
      console.log(avg);



      console.log(arrayString);
    }
    res.render('index', {
      arrayString: arrayString
    });
  });

});


/* GET home page. */
router.get('/adamstown', function (req, res, next) {
  request('https://www.daft.ie/dublin-city/residential-property-for-rent/adamstown/?s%5Badvanced%5D=1&s%5Bignored_agents%5D%5B0%5D=1551&searchSource=rental', (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);

      var items = $('.price');
      items = items.text();
      for (var i = 0; i < items.length; i++) {
        items = items.replace(' Per', '');
        items = items.replace('month', '');
        items = items.replace(',', '');
        items = items.replace('€', '');
        // items = items.replace(',', ' ');
        var arrayString = items.split(" ");


      }
      console.log(arrayString);
    }
    res.render('index', {
      arrayString: arrayString
    });
  });
});

/* GET home page. */
router.get('/dubcity', function (req, res, next) {
  request('https://www.daft.ie/dublin-city/residential-property-for-rent/?s%5Badvanced%5D=1&s%5Bignored_agents%5D%5B0%5D=1551&searchSource=rental', (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);

      var items = $('.price');
      items = items.text();
      for (var i = 0; i < items.length; i++) {
        items = items.replace(' Per', '');
        items = items.replace('month', '');
        items = items.replace('week', '');
        items = items.replace(',', '');
        items = items.replace('€', '');
        // items = items.replace(',', ' ');
        var arrayString = items.split(" ");


      }
      for (var i = 0; i < arrayString.length; i++) {
        console.log(i);
      }
      console.log(arrayString);
    }
    res.render('index', {
      arrayString: arrayString
    });
  });
});
router.get('/dublin-2', function (req, res, next) {
  request('https://www.daft.ie/dublin-city/residential-property-for-rent/dublin-2/?s%5Bignored_agents%5D%5B0%5D=1551&searchSource=rental', (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);

      var items = $('.price');
      items = items.text();
      for (var i = 0; i < items.length; i++) {
        items = items.replace(' Per', '');
        items = items.replace('month', '');
        items = items.replace('week', '');
        items = items.replace(',', '');
        items = items.replace('€', '');
        // items = items.replace(',', ' ');
        var arrayString = items.split(" ");


      }
      for (var i = 0; i < arrayString.length; i++) {
        console.log(i);
      }
      console.log(arrayString);
    }
    res.render('index', {
      arrayString: arrayString
    });
  });
});

router.get('/lucan', function (req, res, next) {
  request('https://www.daft.ie/dublin-city/residential-property-for-rent/lucan/?s%5Bignored_agents%5D%5B0%5D=1551&searchSource=rental', (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);

      var items = $('.price');
      items = items.text();
      for (var i = 0; i < items.length; i++) {
        items = items.replace(' Per', '');
        items = items.replace('month', '');
        items = items.replace('week', '');
        items = items.replace(',', '');
        items = items.replace('€', '');
        // items = items.replace(',', ' ');
        var arrayString = items.split(" ");


      }
      for (var i = 0; i < arrayString.length; i++) {
        console.log(i);
      }
      console.log(arrayString);
    }
    res.render('index', {
      arrayString: arrayString
    });
  });
});

module.exports = router;