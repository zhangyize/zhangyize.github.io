
function doSearch() {
    getCityInfo(document.querySelector('#cityId').value);
    console.log(document.querySelector('#cityId').value);
}

function getCityInfo(cityName) {
    $.ajax({
        url: "http://apis.baidu.com/apistore/weatherservice/cityinfo",
        data: {
            cityname: cityName
        },
        method: "get",
        headers: {
            apikey: '73f6225eea2a83f40ce2de69efeb79ce'
        },
        dataType: 'json',

        success: function(res) {
            // console.log(cityName);
            //   console.log(res);
            var cityCode = res.retData['cityCode'];
            getWeatherInfo(cityName, cityCode);
        },
        error: function(err) {
            console.log(err);
        }
    });
}

function getWeatherInfo(cityName, cityCode) {
    $.ajax({
        url: "http://apis.baidu.com/apistore/weatherservice/recentweathers",
        data: {
            cityname: cityName,
            cityid: cityCode
        },
        method: "get",
        headers: {
            apikey: '73f6225eea2a83f40ce2de69efeb79ce'
        },
        dataType: 'json',
        success: function(res) {
          //未来四天 天气
            // var forecast = res.retData['forecast'];
            console.log(res);
            var arr = [];
            arr = res.retData.history;
            arr.push(res.retData.today);
            arr = arr.concat(res.retData.forecast);


          var   list = document.querySelector('#listBody');
          list.innerHTML = template('tbody',{list:arr});

            },
        error: function(err) {
            console.log(err);


        }


    });
}
