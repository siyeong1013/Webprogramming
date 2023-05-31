{/* <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
    $(document).ready(function() {
        $.getJSON("getHlthHomeSpcnList.json", function(data) {
            let member_data = "";
            $.each(data, function(key, value) {
                member_data += "<tr>";
                member_data += "<td>" + value.cnterNm + "</td>";
                member_data += "<td>" + value.cnterChNm + "</td>";
                member_data += "<td>" + value.operMbyCn + "</td>";
                member_data += "<td>" + value.operYn + "</td>";
                member_data += "<td>" + value.ctpvNm + "</td>";
                member_data += "<td>" + value.sggNm + "</td>";
                member_data += "<td>" + value.roadNmAddr + "</td>";
                member_data += "<td>" + value.lotnoAddr + "</td>";
                member_data += "<td>" + value.hmpgAddr + "</td>";
                member_data += "<td>" + value.rprsTelno + "</td>";
                member_data += "<td>" + value.dscsnTelno + "</td>";
                member_data += "<td>" + value.fxno + "</td>";
                member_data += "<td>" + value.emlAddr + "</td>";
                member_data += "<td>" + value.crtrYmd + "</td>";
                member_data += "</tr>";
            });
            $("#member_table tbody").append(member_data);
        });
    });
</script> */}