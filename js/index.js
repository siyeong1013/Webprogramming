const url = 'https://gist.githubusercontent.com/siyeong1013/08291d65de0449296c9f0ba17d353cd4/raw/d00a750749bcbce310099f0dc3562be8851c3ed3/all.json';

let allRegions = {};

// var map = new kakao.maps.Map(document.getElementById('map'), {
//     center: new kakao.maps.LatLng(35.13417, 129.11397),
//     level: 7,
// });


fetch(url)
.then((res) => res.json())
.then((resJson) => {
	centers = resJson.response.body.items.item;
    console.log(centers);
	centers.forEach(center => {
		let ctpvNm = center.ctpvNm; // ctptNm은 지역 정보를 담은 인자입니다.
		let sggNm = center.sggNm;   // sggNm은 세부 지역 정보를 담은 인자입니다.
		if (!allRegions[ctpvNm]) {
			allRegions[ctpvNm] = new Set();
		}
		allRegions[ctpvNm].add(sggNm);
	});

	// 첫 번째 지역 목록에 최상위 지역 채우기
	let regionSelect = document.getElementById("regionSelect");
	for (let region in allRegions) {
		let option = document.createElement("option");
		option.value = region;
		option.text = region;
		regionSelect.add(option);
	}
	// 두 번째 지역 목록(세부 지역) 업데이트 함수
	function updateSubRegions(subRegions) {
		let subRegionSelect = document.getElementById("subRegionSelect");
		subRegionSelect.innerHTML = '<option value="">세부 지역 선택</option>';
		for (let subRegion of subRegions) {
			let option = document.createElement("option");
			option.value = subRegion;
			option.text = subRegion;
			subRegionSelect.add(option);
		}
	
    }
    regionSelect.addEventListener("change", function () {
        let selectedRegion = this.value;
        if (selectedRegion) {
            updateSubRegions(allRegions[selectedRegion]);
        } else {
            document.getElementById("subRegionSelect").innerHTML = '<option value="">세부 지역 선택</option>';
        }
    });

    // 두 번째 지역 목록 변경 이벤트에 연결
    // 두 카테고리에서 지역 바꾸면 세번째 카테고리도 자동으로 업데이트
    subRegionSelect.addEventListener("change", function () {
        let selectedRegion = document.getElementById('regionSelect').value;
        let selectedSubRegion = this.value;
        if (selectedRegion && selectedSubRegion) {
            let filteredCenters = centers.filter(center => {
                return center.ctpvNm == selectedRegion && center.sggNm == selectedSubRegion;
            });
        } else {
            document.getElementById("centerSelect").innerHTML = '<option value="">센터 선택</option>';
        }
    });

    var centers;
	function getFilteredCenters(selectedRegion, selectedSubRegion) {
		return centers.filter(center => {
			return center.ctpvNm == selectedRegion && center.sggNm == selectedSubRegion;
		});
	}
    function moveMapToCenter(lat, lng) {
        var center = new kakao.maps.LatLng(lat, lng);
        map.setCenter(center);
    }
    
    fetch(url)
        .then((res) => res.json())

    document.querySelector("#subRegionSelect").addEventListener("change", function () {
        let selectedRegion = document.getElementById("regionSelect").value;
        let selectedSubRegion = document.getElementById("subRegionSelect").value;
        if (selectedRegion && selectedSubRegion) {
            let filteredCenters = centers.filter(center => {
                return center.ctpvNm == selectedRegion && center.sggNm == selectedSubRegion;
            });
            if (filteredCenters.length) {
                let center = filteredCenters[0];
                let lat = center.lat;
                let lng = center.lot;
                moveMapToCenter(lat, lng);
            }
        }
    });

})

