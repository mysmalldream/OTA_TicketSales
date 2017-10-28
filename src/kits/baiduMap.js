
    var map = new BMap.Map("container");
    map.setDefaultCursor("crosshair");

    map.enableScrollWheelZoom();
    var point = new BMap.Point(108.947616, 34.275469);
    map.centerAndZoom(point, 13);
    var gc = new BMap.Geocoder();

    map.addControl(new BMap.NavigationControl());
    map.addControl(new BMap.OverviewMapControl());
    map.addControl(new BMap.ScaleControl());
    map.addControl(new BMap.MapTypeControl());
    map.addControl(new BMap.CopyrightControl());

    var marker = new BMap.Marker(point);
    map.addOverlay(marker);

    marker.addEventListener("click", function (e) {
        document.getElementById("lng").value = e.point.lng;
        document.getElementById("lat").value = e.point.lat;
    });


    marker.enableDragging();

    marker.addEventListener("dragend", function (e) {
        gc.getLocation(e.point, function (rs) {
        showLocationInfo(e.point, rs);
        });
    });


    function showLocationInfo(pt, rs) {
        var opts = { width: 250, height: 150, title: "当前位置" };
        var addComp = rs.addressComponents;
        var addr = "当前位置：" + addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber + "<br/>";
        addr += "纬度: " + pt.lat + ", " + "经度：" + pt.lng;
        var infoWindow = new BMap.InfoWindow(addr, opts);
        marker.openInfoWindow(infoWindow);
    }

    map.addEventListener("click", function (e) {
        document.getElementById("lng").value = e.point.lng;
        document.getElementById("lat").value = e.point.lat;
    });


    var traffic = new BMap.TrafficLayer();
    map.addTileLayer(traffic);


    function iploac(result) {
        var cityName = result.name;
    }

    var myCity = new BMap.LocalCity();
    myCity.get(iploac);

    function sear(result) {
        var local = new BMap.LocalSearch(map, { renderOptions: { map: map } });
        local.search(result);
    }

