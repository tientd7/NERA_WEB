
$('.toggle-form-search .title-search').click(function () {
    $('.wrapper-select').toggle(200);
});

$('#city').trigger("select");
$('#city').trigger("change");

$('#district').trigger("select");
$('#district').trigger("change");

$('#real_estate').trigger("select");
$('#real_estate').trigger("change");

$('#number_room').trigger("select");
$('#number_room').trigger("change");

$('#price').trigger("select");
$('#price').trigger("change");

$('#city').click(function () {

    $('#district option').addClass('item');
    if ($('#city').val() == "1") {
        
        $('#district .item').remove();

        $('#district').append(`
            <option value="">-- Chọn Quận/Huyện --</option>
            <option class="item" value = "1"> Quận Hoàng Mai</option >
            <option class="item" value="2">Quận Ba Đình</option>
            <option class="item" value="3">Quận Long Biên</option>
            <option class="item" value="4">Quận Cầu Giấy</option>
            <option class="item" value="5">Quận Đống Đa</option>
            <option class="item" value="6">Quận Hai Bà Trưng</option>
            <option class="item" value="7">Quận Hoàn Kiếm</option>
            <option class="item" value="8">Quận Tây Hồ</option>
            <option class="item" value="9">Quận Thanh Xuân</option>
            <option class="item" value="10">Huyện Ba Vì</option>
            <option class="item" value="11">Huyện Chương Mỹ</option>
            <option class="item" value="12">Huyện Đan Phượng</option>
            <option class="item" value="15">Huyện Gia Lâm</option>
            <option class="item" value="16">Huyện Hoài Đức</option>
            <option class="item" value="17">Huyện Mê Linh</option>
            <option class="item" value="18">Huyện Mỹ Đức</option>
            <option class="item" value="19">Huyện Phú Xuyên</option>
            <option class="item" value="20">Huyện Phúc Thọ</option>
            <option class="item" value="21">Huyện Quốc Oai</option>
            <option class="item" value="22">Huyện Sóc Sơn</option>
            <option class="item" value="23">Huyện Thạch Thất</option>
            <option class="item" value="24">Huyện Thanh Oai</option>
            <option class="item" value="25">Huyện Thanh Trì</option>
            <option class="item" value="26">Huyện Thường Tín</option>
            <option class="item" value="27">Huyện Từ Liêm</option>
            <option class="item" value="28">Huyện Ứng Hòa</option>
            <option class="item" value="63">Quận Hà Đông</option>
            <option class="item" value="555">Huyện Đông Anh</option>
            <option class="item" value="697">Thị xã Sơn Tây</option>
            <option class="item" value="719">Quận Bắc Từ Liêm</option>
            <option class="item" value="720">Quận Nam Từ Liêm</option>`);
    }
    else if ($('#city').val() == "2") {
        $('#district .item').remove();
        $('#district').append(`
              <option value="">-- Chọn Quận/Huyện --</option>
            <option value="13">Quận 1</option>
            <option value="14">Quận 2</option>
            <option value="29">Quận 3</option>
            <option value="30">Quận 4</option>
            <option value="31">Quận 5</option>
            <option value="32">Quận 6</option>
            <option value="33">Quận 7</option>
            <option value="34">Quận 8</option>
            <option value="35">Quận 9</option>
            <option value="36">Quận 10</option>
            <option value="37">Quận 11</option>
            <option value="38">Quận 12</option>
            <option value="39">Quận Tân Bình</option>
            <option value="40">Quận Tân Phú</option>
            <option value="41">Quận Bình Tân</option>
            <option value="42">Quận Phú Nhuận</option>
            <option value="43">Quận Gò Vấp</option>
            <option value="44">Quận Bình Thạnh</option>
            <option value="45">Quận Thủ Đức</option>
            <option value="557">Huyện Cần Giờ</option>
            <option value="558">huyện Củ Chi</option>
            <option value="685">Huyện Bình Chánh</option>
            <option value="688">Huyện Hóc Môn</option>
            <option value="689">Huyện Nhà Bè</option>
        `);
    }

    else if ($('#city').val() == "3") {
        $('#district .item').remove();
        $('#district').append(`
              <option value="">-- Chọn Quận/Huyện --</option>
            <option class="item" value="53">Huyện Sơn Trà</option>
            <option class="item" value="54">Quận Hải Châu</option>
            <option class="item" value="55">Quận Thanh Khê</option>
            <option class="item" value="56">Quận Ngũ Hành Sơn</option>
            <option class="item" value="57">Quận Liên Chiểu</option>
            <option class="item" value="58">Quận Cẩm Lệ</option>
            <option class="item" value="171">Huyện đảo Hoàng Sa</option>
            <option class="item" value="586">Huyện Hòa Vang</option>
            <option class="item" value="699">Quận Sơn Trà</option>
            `);
    }

    else if ($('#city').val() == "4") {
        $('#district .item').remove();
        $('#district').append(`
  <option value="">-- Chọn Quận/Huyện --</option>
           <option class="item" value="46">Quận Hồng Bàng</option>
            <option value="47">Quận Ngô Quyền</option>
            <option class="item" value="48">Quận Lê Chân</option>
            <option class="item" value="49">Quận Kiến An</option>
            <option class="item" value="50">Quận Hải An</option>
            <option class="item" value="51">Quận Dương Kinh</option>
            <option class="item" value="52">Quận Đồ Sơn</option>
            <option class="item" value="261">Huyện An Dương</option>
            <option class="item" value="262">Huyện đảo Cát Hải</option>
            <option class="item" class="item" value="263">Huyện Kiến Thụy</option>
            <option class="item" value="264">Huyện Tiên Lãng</option>
            <option class="item" value="265">Huyện Vĩnh Bảo</option>
            <option class="item" value="601">Huyện An Lão</option>
            <option class="item" value="602">Huyện đảo Bạch Long Vĩ</option>
            <option class="item" value="603">Huyện Thuỷ Nguyên</option>
            `);
    }

    else if ($('#city').val() == "5") {
        $('#district .item').remove();
        $('#district').append(`
  <option value="">-- Chọn Quận/Huyện --</option>
            <option value="413">Huyện Ba Chẽ</option>
<option value="414">Huyện Bình Liêu</option>
<option value="415">Thành phố Cẩm Phả</option>
<option value="416">Huyện đảo Cô Tô</option>
<option value="417">Huyện Đầm Hà</option>
<option value="418">Huyện Đông Triều</option>
<option value="419">Thành phố Hạ Long</option>
<option value="420">Huyện Hoành Bồ</option>
<option value="421">Thành phố Móng Cái</option>
<option value="422">Huyện Tiên Yên</option>
<option value="423">Thành phố Uông Bí</option>
<option value="424">Huyện Yên Hưng</option>
<option value="559">Huyện Vân Đồn</option>
<option value="666">Huyện Tư Nghĩa</option>
<option value="667">Huyện Hải Hà</option>
<option value="716">Thị xã Quảng Yên</option>
            `);
    }

    else if ($('#city').val() == "6") {
        $('#district .item').remove();
        $('#district').append(`
  <option value="">-- Chọn Quận/Huyện --</option>
            <option value="309">Thành phố Cam Ranh</option>
            <option value="310">Huyện Diên Khánh</option>
<option value="311">Huyện Khánh Sơn</option>
<option value="312">Huyện Khánh Vĩnh</option>
<option value="313">Thành phố Nha Trang</option>
<option value="314">Thị xã Ninh Hòa</option>
<option value="315">Huyện Vạn Ninh</option>
<option value="608">Huyện đảo Trường Sa</option>
<option value="609">Huyện Cam Lâm</option>
`);
    }

    else if ($('#city').val() == "7") {
        $('#district .item').remove();
        $('#district').append(`
  <option value="">-- Chọn Quận/Huyện --</option>
            <option value = "81" > Huyện An Phú</option >
<option value="82">Huyện Châu Phú</option> 
<option value="83">Thành phố Châu Đốc</option> 
<option value="84">Huyện Châu Thành</option> 
<option value="85">Huyện Chợ Mới</option> 
<option value="86">Thành phố Long Xuyên</option> 
<option value="87">Thị xã Tân Châu</option>
<option value="88">Huyện Thoại Sơn</option> 
<option value="89">Huyện Tịnh Biên</option> 
<option value="90">Huyện Tri Tôn</option>
<option value="700">Huyện Phú Tân</option>
            `);
    }

    else if ($('#city').val() == "8") {
        $('#district .item').remove();
        $('#district').append(`
  <option value="">-- Chọn Quận/Huyện --</option>
            <option value = "73" > Huyện Châu Đức</option>
<option value="74">Huyện Côn Đảo</option>
<option value="75">Huyện Đất Đỏ</option> 
<option value="76">Huyện Long Điền</option>
<option value="77">Huyện Tân Thành</option>
<option value="78">Thị xã Bà Rịa</option>
<option value="79">Thành phố Vũng Tàu</option> 
<option value="80">Huyện Xuyên Mộc</option>
            `);
    }

    else if ($('#city').val() == "9") {
        $('#district .item').remove();
        $('#district').append(`
  <option value="">-- Chọn Quận/Huyện --</option>
            <option value = "104" > Thị xã Bắc Kạn</option>
<option value="105">Huyện Chợ Mới</option> 
<option value="106">Huyện Na Rì</option>
<option value="107">Huyện Ngân Sơn</option> 
<option value="563">Huyện Ba Bể</option>
<option value="564">Huyện Bạch Thông</option>
<option value="565">Huyện Chợ Đồn</option>
<option value="566">Huyện Pác Nặm</option>
            `);
    }

    else if ($('#city').val() == "10") {
        $('#district .item').remove();
        $('#district').append(`
  <option value="">-- Chọn Quận/Huyện --</option>
            <option value = "97" >Thành phố Bắc Giang</option>
<option value="98">Huyện Lục Nam</option>
<option value="99">Huyện Lục Ngạn</option>
<option value="100">Huyện Sơn Động</option>
<option value="101">Huyện Tân Yên</option> 
<option value="102">Huyện Yên Dũng</option> 
<option value="103">Huyện Yên Thế</option> 
<option value="560">Huyện Hiệp Hòa</option>
<option value="561">Huyện Lạng Giang</option>
<option value="562">Huyện Việt Yên</option>
            `);
    }

    else if ($('#city').val() == "11") {
        $('#district .item').remove();
        $('#district').append(`
  <option value="">-- Chọn Quận/Huyện --</option>
            <option value = "66" >Huyện Đông Hải</option>
<option value="91">Thành phố Bạc Liêu</option>
<option value="92">Huyện Giá Rai</option>
<option value="93">Huyện Hoà Bình</option>
<option value="94">Huyện Hồng Dân</option> 
<option value="95">Huyện Phước Long</option> 
<option value="96">Huyện Vĩnh Lợi</option>
            `);
    }

    else if ($('#city').val() == "12") {
        $('#district .item').remove();
        $('#district').append(`
  <option value="">-- Chọn Quận/Huyện --</option>
            <option value = "108" >Thành phố Bắc Ninh</option>
<option value="109">Huyện Gia Bình</option>
<option value="110">Huyện Quế Võ</option>
<option value="111">Huyện Thuận Thành</option>
<option value="112">Huyện Tiên Du</option> 
<option value="113">Thị xã Từ Sơn</option> 
<option value="114">Huyện Yên Phong</option>
<option value="567">Huyện Lương Tài</option>
            `);
    }

    else if ($('#city').val() == "13") {
        $('#district .item').remove();
        $('#district').append(` 
<option value="">-- Chọn Quận/Huyện --</option>
            <option value = "115" > Huyện Ba Tri</option> 
<option value="116">Thành phố Bến Tre</option> 
<option value="117">Huyện Bình Đại</option> 
<option value="118">Huyện Châu Thành</option> 
<option value="119">Huyện Chợ Lách</option> 
<option value="120">Huyện Giồng Trôm</option>
<option value="121">Huyện Mỏ Cày Nam</option>
<option value="122">Huyện Thạnh Phú</option>
<option value="568">Huyện Mỏ Cày Bắc</option>
            `);
    }

    else if ($('#city').val() == "14") {
        $('#district .item').remove();
        $('#district').append(`
  <option value="">-- Chọn Quận/Huyện --</option>
            <option value = "123" > Thị xã Bến Cát</option>
<option value="124">Huyện Dầu Tiếng</option>
<option value="125">Thị xã Dĩ An</option>
<option value="126">Huyện Phú Giáo</option> 
<option value="127">Thị xã Tân Uyên</option> 
<option value="128">Thành phố Thủ Dầu Một</option> 
<option value="129">Thị xã Thuận An</option> 
<option value="714">Huyện Bàu Bàng</option> 
<option value="715">Huyện Bắc Tân Uyên</option>
            `);
    }

    else if ($('#city').val() == "15") {
        $('#district .item').remove();
        $('#district').append(`
  <option value="">-- Chọn Quận/Huyện --</option>
            <option value = "140" > Thị xã Bình Long</option>
<option value="141">Huyện Bù Đăng</option> 
<option value="142">Thị xã Đồng Xoài</option> 
<option value="143">Huyện Lộc Ninh</option>
<option value="144">Thị xã Phước Long</option> 
<option value="145">Huyện Bù Gia Mập</option>
<option value="570">Huyện Bù Đốp</option>
<option value="571">Huyện Chơn Thành</option>
<option value="572">Huyện Đồng Phú</option> 
<option value="573">Huyện Hớn Quản</option> 
<option value="705">Huyện Phú Riềng</option>
            `);
    }

    else if ($('#city').val() == "16") {
        $('#district .item').remove();
        $('#district').append(`
  <option value="">-- Chọn Quận/Huyện --</option>
            <option value = "146" > Huyện Hàm Tân</option>
<option value="147">Thị xã La Gi</option> 
<option value="148">Thành phố Phan Thiết</option>
<option value="149">Huyện Tuy Phong</option> 
<option value="574">Huyện Bắc Bình</option> 
<option value="575">Huyện Đức Linh</option> 
<option value="576">Huyện Hàm Thuận Bắc</option>
<option value="577">Huyện Hàm Thuận Nam</option>
<option value="578">Huyện đảo Phú Quý</option> 
<option value="579">Huyện Tánh Linh</option>
            `);
    }

    else if ($('#city').val() == "17") {
        $('#district .item').remove();
        $('#district').append(`
  <option value="">-- Chọn Quận/Huyện --</option>
            <option value = "130" > Huyện An Lão</option>
<option value="131">Huyện An Nhơn</option>
<option value="132">Huyện Hoài Nhơn</option>
<option value="133">Huyện Phù Cát</option>
<option value="134">Huyện Phù Mỹ</option>
<option value="135">Thành phố Qui Nhơn</option>
<option value="136">Huyện Tây Sơn</option> 
<option value="137">Huyện Tuy Phước</option>
<option value="138">Huyện Vân Canh</option>
<option value="139">Huyện Vĩnh Thạnh</option> 
<option value="569">Huyện Hoài Ân</option>
            `);
    }

    else if ($('#city').val() == "18") {
        $('#district .item').remove();
        $('#district').append(`
  <option value="">-- Chọn Quận/Huyện --</option>
            <option value = "150" > Thành phố Cà Mau</option> 
<option value="151">Huyện Cái Nước</option> 
<option value="152">Huyện Đầm Dơi</option>
<option value="153">Huyện Năm Căn</option> 
<option value="154">Huyện Ngọc Hiển</option>
<option value="155">Huyện Phú Tân</option>
<option value="156">Huyện Thới Bình</option>
<option value="157">Huyện Trần Văn Thời</option>
<option value="158">Huyện U Minh</option>
            `);
    }

    else if ($('#city').val() == "19") {
        $('#district .item').remove();
        $('#district').append(`
  <option value="">-- Chọn Quận/Huyện --</option>
            <option value = "59" > Quận Ninh Kiều</option> 
<option value="60">Quận Bình Thủy</option> 
<option value="61">Quận Cái Răng</option>
<option value="62">Quận Thốt Nốt</option> 
<option value="64">Quận Ô môn</option> 
<option value="167">Huyện Cờ Đỏ</option>
<option value="168">Huyện Phong Điền</option> 
<option value="169">Huyện Vĩnh Thạnh</option>
<option value="580">Huyện Thới Lai</option>
                            `);
    }

    else if ($('#city').val() == "20") {
        $('#district .item').remove();
        $('#district').append(`
 <option value="">-- Chọn Quận/Huyện --</option>

            <option value = "159" > Huyện Bảo Lạc</option> 
<option value="160">Huyện Bảo Lâm</option> 
<option value="161">Thị xã Cao Bằng</option> 
<option value="162">Huyện Nguyên Bình</option>
<option value="163">Huyện Quảng Uyên</option> 
<option value="164">Huyện Thông Nông</option> 
<option value="165">Huyện Trà Lĩnh</option> 
<option value="166">Huyện Trùng Khánh</option>
<option value="581">Huyện Hà Quảng</option>
<option value="582">Huyện Hạ Lang</option> 
<option value="583">Huyện Hòa An</option> 
<option value="584">Huyện Phục Hòa</option>
<option value="585">Huyện Thạch An</option>
            `);
    }

    else if ($('#city').val() == "21") {
        $('#district .item').remove();
        $('#district').append(`
 <option value="">-- Chọn Quận/Huyện --</option>

            <option value = "213" > Thị xã An Khê</option>
<option value="214">Thị xã Ayun Pa</option> 
<option value="215">Huyện Chư Prông</option>
<option value="216">Huyện Chư Sê</option> 
<option value="217">Huyện Đăk Đoa</option>
<option value="218">Huyện Đức Cơ</option> 
<option value="219">Huyện KBang</option> 
<option value="220">Huyện Kông Chro</option>
<option value="221">Huyện Krông Pa</option> 
<option value="222">Huyện Mang Yang</option>
<option value="223">Huyện Phú Thiện</option>
<option value="224">Thành phố Pleiku</option>
<option value="225">Huyện Chư Pưh</option> 
<option value="591">Huyện Chư Păh</option> 
<option value="592">Huyện Đắk Pơ</option> 
<option value="593">Huyện Ia Grai</option> 
<option value="594">Huyện Ia Pa</option>
            `);
    }

    else if ($('#city').val() == "22") {
        $('#district .item').remove();
        $('#district').append(`
 <option value="">-- Chọn Quận/Huyện --</option>
            <option value = "226" > Huyện Đồng Văn</option> 
<option value="227">Thành phố Hà Giang</option> 
<option value="228">Huyện Mèo Vạc</option> 
<option value="229">Huyện Quản Bạ</option> 
<option value="230">Huyện Vị Xuyên</option>
<option value="231">Huyện Xín Mần</option>
<option value="232">Huyện Yên Minh</option>
<option value="595">Huyện Bắc Mê</option> 
<option value="596">Huyện Bắc Quang</option>
<option value="597">Huyện Hoàng Su Phì</option>
<option value="598">Huyện Quang Bình</option>
            `);
    }

    else if ($('#city').val() == "23") {
        $('#district .item').remove();
        $('#district').append(`
 <option value="">-- Chọn Quận/Huyện --</option>
            <option value = "233" > Huyện Bình Lục</option>
<option value="234">Huyện Duy Tiên</option> 
<option value="235">Huyện Kim Bảng</option> 
<option value="236">Huyện Lý Nhân</option> 
<option value="237">Thành phố Phủ Lý</option> 
<option value="599">Huyện Thanh Liêm</option>
        `);
    }

    else if ($('#city').val() == "24") {
        $('#district .item').remove();
        $('#district').append(`
 <option value="">-- Chọn Quận/Huyện --</option>
            <option value = "238" > Huyện Can Lộc</option>
<option value="239">Huyện Cẩm Xuyên</option>
<option value="240">Huyện Đức Thọ</option>
<option value="241">Thành phố Hà Tĩnh</option>
<option value="242">Thị xã Hồng Lĩnh</option>
<option value="243">Huyện Hương Khê</option>
<option value="244">Huyện Hương Sơn</option>
<option value="245">Thị xã Kỳ Anh</option>
<option value="246">Huyện Vũ Quang</option>
<option value="247">Huyện Thạch Hà</option>
<option value="248">Huyện Nghi Xuân</option>
<option value="600">Huyện Lộc Hà</option>
<option value="712">Huyện Kỳ Anh</option>
`);
    }

    else if ($('#city').val() == "25") {
        $('#district .item').remove();
        $('#district').append(`
 <option value="">-- Chọn Quận/Huyện --</option>
            <option value = "249" > Huyện Bình Giang</option>
<option value="250">Huyện Cẩm Giàng</option>
<option value="251">Thị xã Chí Linh</option>
<option value="252">Huyện Gia Lộc</option> 
<option value="253">Thành phố Hải Dương</option> 
<option value="254">Huyện Kim Thành</option>
<option value="255">Huyện Kinh Môn</option> 
<option value="256">Huyện Nam Sách</option> 
<option value="257">Huyện Ninh Giang</option>
<option value="258">Huyện Thanh Hà</option>
<option value="259">Huyện Thanh Miện</option> 
<option value="260">Huyện Tứ Kỳ</option>

            `);
    }

    else if ($('#city').val() == "26") {
        $('#district .item').remove();
        $('#district').append(`
 <option value="">-- Chọn Quận/Huyện --</option>
            <option value = "266" > Huyện Châu Thành</option>
<option value="267">Huyện Châu Thành A</option> 
<option value="268">Huyện Long Mỹ</option> 
<option value="269">Huyện Phụng Hiệp</option> 
<option value="270">Thị xã Ngã Bảy (Tân Hiệp cũ)</option>
<option value="271">Thành phố Vị Thanh</option>
<option value="272">Huyện Vị Thủy</option>
<option value="710">Thị xã Long Mỹ</option>

            `);
    }

    else if ($('#city').val() == "27") {
        $('#district .item').remove();
        $('#district').append(`
 <option value="">-- Chọn Quận/Huyện --</option>
            <option value = "273" > Huyện Cao Phong</option>
<option value="274">Huyện Đà Bắc</option> 
<option value="275">Thành phố Hoà Bình</option>
<option value="276">Huyện Kim Bôi</option>
<option value="277">Huyện Lạc Sơn</option> 
<option value="278">Huyện Lạc Thủy</option>
<option value="279">Huyện Lương Sơn</option>
<option value="280">Huyện Mai Châu</option> 
<option value="281">Huyện Yên Thủy</option> 
<option value="604">Huyện Kỳ Sơn</option> 
<option value="703">Huyện Tân Lạc</option>
            `);
    }

    else if ($('#city').val() == "28") {
        $('#district .item').remove();
        $('#district').append(`
 <option value="">-- Chọn Quận/Huyện --</option>
            <option value = "282" > Huyện Ân Thi</option>
<option value="283">Thành phố Hưng Yên</option>
<option value="284">Huyện Khoái Châu</option>
<option value="285">Huyện Mỹ Hào</option>
<option value="286">Huyện Văn Giang</option>
<option value="287">Huyện Văn Lâm</option>
<option value="288">Huyện Yên Mỹ</option>
<option value="605">Huyện Kim Động</option>
<option value="606">Huyện Phù Cừ</option>
<option value="607">Huyện Tiên Lữ</option>            `);
    }

    else if ($('#city').val() == "29") {
        $('#district .item').remove();
        $('#district').append(`
 <option value="">-- Chọn Quận/Huyện --</option>
            <option value = "289" > Huyện An Biên</option>
<option value="290">Huyện An Minh</option>
<option value="291">Huyện Châu Thành</option>
<option value="292">Huyện Giồng Riềng</option>
<option value="293">Huyện Gò Quao</option>
<option value="294">Thị xã Hà Tiên</option>
<option value="295">Huyện Hòn Đất</option>
<option value="296">Huyện Kiên Lương</option>
<option value="297">Huyện đảo Phú Quốc</option>
<option value="298">Thành phố Rạch Giá</option>
<option value="299">Huyện Tân Hiệp</option>
<option value="300">Huyện U Minh Thượng</option>
<option value="301">Huyện Vĩnh Thuận</option>
<option value="610">Huyện đảo Kiên Hải</option>
<option value="611">Huyện Giang Thành</option>            `);
    }

    else if ($('#city').val() == "30") {
        $('#district .item').remove();
        $('#district').append(`
 <option value="">-- Chọn Quận/Huyện --</option>
            <option value = "302" > Huyện Đắk Glei</option>
<option value="303">Huyện Đắk Hà</option>
<option value="304">Huyện Đăk Tô</option> 
<option value="305">Huyện Kon Plông</option> 
<option value="306">Huyện Kon Rẫy</option> 
<option value="307">Huyện Sa Thầy</option> 
<option value="308">Huyện Tu Mơ Rông</option>
<option value="612">Thành phố Kon Tum</option>
<option value="613">Huyện Ngọc Hồi</option> 
<option value="711">Huyện Ia H'Drai</option>
`);
    }

    else if ($('#city').val() == "31") {
        $('#district .item').remove();
        $('#district').append(`
 <option value="">-- Chọn Quận/Huyện --</option>
            <option value = "316" > Thị xã Lai Châu</option> 
<option value="317">Huyện Phong Thổ</option>
<option value="318">Huyện Sìn Hồ</option>
<option value="319">Huyện Tam Đường</option>
<option value="320">Huyện Than Uyên</option> 
<option value="321">Huyện Mường Tè</option> 
<option value="614">Huyện Tân Uyên</option> 
<option value="702">Huyện Nậm Nhùn</option>
`);
    }

    else if ($('#city').val() == "32") {
        $('#district .item').remove();
        $('#district').append(`
 <option value="">-- Chọn Quận/Huyện --</option>
            <option value = "337"> Huyện Bảo Lâm</option>
<option value="338">Thành phố Bảo Lộc</option>
<option value="339">Huyện Di Linh</option> 
<option value="340">Thành phố Đà Lạt</option>
<option value="341">Huyện Đạ Tẻh</option> 
<option value="342">Huyện Lạc Dương</option>
<option value="343">Huyện Lâm Hà</option> 
<option value="615">Huyện Cát Tiên</option> 
<option value="616">Huyện Đạ Huoai</option>
<option value="617">Huyện Đam Rông</option> 
<option value="618">huyện Đơn Dương</option> 
<option value="619">Huyện Đức Trọng</option>
            `);
    }

    else if ($('#city').val() == "33") {
        $('#district .item').remove();
        $('#district').append(`
 <option value="">-- Chọn Quận/Huyện --</option>
            <option value = "322"> Huyện Bắc Sơn</option> 
<option value="323">Huyện Bình Gia</option> 
<option value="324">Huyện Chi Lăng</option>
<option value="325">Huyện Đình Lập</option>
<option value="326">Huyện Hữu Lũng</option> 
<option value="327">Thành phố Lạng Sơn</option>
<option value="328">Huyện Lộc Bình</option>
<option value="329">Huyện Văn Quan</option>
<option value="620">Huyện Cao Lộc</option> 
<option value="621">huyện Tràng Định</option> 
<option value="622">Huyện Văn Lãng</option>
`);
    }

    else if ($('#city').val() == "34") {
        $('#district .item').remove();
        $('#district').append(`
 <option value="">-- Chọn Quận/Huyện --</option>
            <option value = "330" > Huyện Bát Xát</option>
<option value="331">Huyện Bắc Hà</option> 
<option value="332">Thành phố Lào Cai</option> 
<option value="333">Huyện Mường Khương</option> 
<option value="334">Huyện Sa Pa</option>
<option value="335">Huyện Si Ma Cai</option>
<option value="336">Huyện Văn Bàn</option> 
<option value="623">Huyện Bảo Thắng</option> 
<option value="624">Huyện Bảo Yên</option>
`);
    }

    else if ($('#city').val() == "35") {
        $('#district .item').remove();
        $('#district').append(`
 <option value="">-- Chọn Quận/Huyện --</option>
            <option value = "344" > Huyện Bến Lức</option>
<option value="345">Huyện Cần Đước</option>
<option value="346">Huyện Cần Giuộc</option>
<option value="347">Huyện Châu Thành</option> 
<option value="348">Huyện Đức Hòa</option> 
<option value="349">Huyện Đức Huệ</option>
<option value="350">Huyện Mộc Hóa</option> 
<option value="351">Thành phố Tân An</option> 
<option value="352">Huyện Tân Hưng</option> 
<option value="353">Huyện Tân Thạnh</option> 
<option value="354">Huyện Tân Trụ</option> 
<option value="355">Huyện Thạnh Hóa</option> 
<option value="356">Huyện Thủ Thừa</option>
<option value="357">Huyện Vĩnh Hưng</option> 
<option value="709">Thị xã Kiến Tường</option>
`);
    }

    else if ($('#city').val() == "36") {
        $('#district .item').remove();
        $('#district').append(`
 <option value="">-- Chọn Quận/Huyện --</option>
            <option value = "358"> Huyện Giao Thủy</option>
<option value="359">Huyện Hải Hậu</option>
<option value="360">Huyện Mỹ Lộc</option> 
<option value="361">Thành phố Nam Định</option>
<option value="362">Huyện Nam Trực</option> 
<option value="363">Huyện Nghĩa Hưng</option>
<option value="364">Huyện Trực Ninh</option>
<option value="365">Huyện Vụ Bản</option> 
<option value="366">Huyện Xuân Trường</option>
<option value="367">Huyện Ý Yên</option>
`);
    }

    else if ($('#city').val() == "37") {
        $('#district .item').remove();
        $('#district').append(`
 <option value="">-- Chọn Quận/Huyện --</option>
            <option value = "375" > Huyện Anh Sơn</option>
<option value="376">Huyện Con Cuông</option> 
<option value="377">Thị xã Cửa Lò</option> 
<option value="378">Huyện Diễn Châu</option> 
<option value="379">Huyện Đô Lương</option>
<option value="380">Huyện Hưng Nguyên</option> 
<option value="381">Huyện Kỳ Sơn</option> 
<option value="382">Huyện Nam Đàn</option> 
<option value="383">Huyện Nghi Lộc</option>
<option value="384">Huyện Quỳ Hợp</option> 
<option value="385">Huyện Quỳnh Lưu</option>
<option value="386">Huyện Tân Kỳ</option>
<option value="387">Thị xã Thái Hòa</option>
<option value="388">Huyện Thanh Chương</option> 
<option value="389">Thành phố Vinh</option> 
<option value="390">Huyện Yên Thành</option>
<option value="625">Huyện Nghĩa Đàn</option> 
<option value="626">Huyện Quế Phong</option> 
<option value="627">Huyện Quỳ Châu</option>
<option value="628">Huyện Tương Dương</option> 
<option value="708">Thị xã Hoàng Mai</option>
`);
    }

    else if ($('#city').val() == "38") {
        $('#district .item').remove();
        $('#district').append(`
 <option value="">-- Chọn Quận/Huyện --</option>
            <option value = "368" > Huyện Gia Viễn</option>
<option value="369">Huyện Kim Sơn</option>
<option value="370">Huyện Nho Quan</option>
<option value="371">Thành phố Ninh Bình</option>
<option value="372">Thị xã Tam Điệp</option>
<option value="629">Huyện Hoa Lư</option> 
<option value="630">Huyện Yên Khánh</option> 
<option value="631">Huyện Yên Mô</option>
 `);
    }

    else if ($('#city').val() == "39") {
        $('#district .item').remove();
        $('#district').append(`
 <option value="">-- Chọn Quận/Huyện --</option>
            <option value = "373" > Huyện Ninh Sơn</option>
<option value="374">Thành phố Phan Rang-Tháp Chàm</option> 
<option value="632">Huyện Bác Ái</option> 
<option value="633">Huyện Ninh Hải</option>
<option value="634">Huyện Ninh Phước</option>
<option value="635">Huyện Thuận Bắc</option> 
<option value="636">Huyện Thuận Nam</option>
`);
    }

    else if ($('#city').val() == "40") {
        $('#district .item').remove();
        $('#district').append(`
 <option value="">-- Chọn Quận/Huyện --</option>
            <option value = "391" > Huyện Đoan Hùng</option >
<option value="392">Huyện Hạ Hòa</option> 
<option value="393">Huyện Lâm Thao</option>
<option value="394">Thị xã Phú Thọ</option> 
<option value="395">Huyện Thanh Ba</option>
<option value="396">Huyện Thanh Sơn</option> 
<option value="397">Huyện Thanh Thủy</option>
<option value="398">Thành phố Việt Trì</option> 
<option value="399">Huyện Yên Lập</option> 
<option value="637">Huyện Phù Ninh</option> 
<option value="638">Huyện Tam Nông</option> 
<option value="639">Huyện Tân Sơn</option> 
<option value="640">Huyện Cẩm Khê</option>
           `);
    }

    else if ($('#city').val() == "41") {
        $('#district .item').remove();
        $('#district').append(`
 <option value="">-- Chọn Quận/Huyện --</option>
            <option value = "400"> Thị xã Sông Cầu</option>
<option value="401">Huyện Tuy An</option>
<option value="402">Thành phố Tuy Hòa</option>
<option value="641">Huyện Đông Hòa</option>
<option value="642">Huyện Đồng Xuân</option> 
<option value="643">Huyện Phú Hòa</option> 
<option value="644">Huyện Sông Hinh</option>
<option value="645">Huyện Sơn Hòa</option>
<option value="646">Huyện Tây Hòa</option>
`);
    }

    else if ($('#city').val() == "42") {
        $('#district .item').remove();
        $('#district').append(`
 <option value="">-- Chọn Quận/Huyện --</option>
            <option value = "403"> Huyện Bố Trạch</option> 
<option value="404">Thành phố Đồng Hới</option> 
<option value="405">Huyện Lệ Thủy</option>
<option value="647">Huyện Minh Hóa</option> 
<option value="648">Huyện Quảng Ninh</option>
<option value="649">Huyện Quảng Trạch</option>
<option value="650">Huyện Tuyên Hóa</option>
<option value="706">Thị xã Ba Đồn</option>
`);
    }

    else if ($('#city').val() == "43") {
        $('#district .item').remove();
        $('#district').append(`
 <option value="">-- Chọn Quận/Huyện --</option>
            <option value = "406" > Huyện Điện Bàn</option> 
<option value="407">Thành phố Hội An</option> 
<option value="408">Huyện Núi Thành</option> 
<option value="409">Huyện Phú Ninh</option> 
<option value="410">Thành phố Tam Kỳ</option>
<option value="411">Huyện Thăng Bình</option> 
<option value="412">Huyện Tiên Phước</option>
<option value="651">Huyện Nam Trà My</option> 
<option value="652">Huyện Bắc Trà My</option> 
<option value="653">Huyện Duy Xuyên</option> 
<option value="654">Huyện Đại Lộc</option>
<option value="655">Huyện Đông Giang</option>
<option value="656">Huyện Hiệp Đức</option>
<option value="657">Huyện Nam Giang</option> 
<option value="658">Huyện Phước Sơn</option>
<option value="659">Huyện Quế Sơn</option> 
<option value="660">Huyện Tây Giang</option>
<option value="661">Huyện Nông Sơn</option>
`);
    }

    else if ($('#city').val() == "44") {
        $('#district .item').remove();
        $('#district').append(`
 <option value="">-- Chọn Quận/Huyện --</option>
            <option value = "425" > Huyện Ba Tơ</option>
<option value="426">Huyện Đức Phổ</option>
<option value="427">Huyện đảo Lý Sơn</option>
<option value="428">Huyện Minh Long</option>
<option value="429">Huyện Mộ Đức</option> 
<option value="430">Thành phố Quảng Ngãi</option> 
<option value="431">Huyện Sơn Hà</option> 
<option value="432">Huyện Sơn Tịnh</option> 
<option value="433">Huyện Trà Bồng</option> 
<option value="662">Huyện Bình Sơn</option> 
<option value="663">Huyện Nghĩa Hành</option>
<option value="664">Huyện Sơn Tây</option> 
<option value="665">Huyện Tây Trà</option> 
<option value="701">Huyện Tư Nghĩa</option>
`);
    }

    else if ($('#city').val() == "45") {
        $('#district .item').remove();
        $('#district').append(`
 <option value="">-- Chọn Quận/Huyện --</option>
            <option value = "434" > Huyện Cam Lộ</option>
<option value="435">Huyện đảo Cồn Cỏ</option>
<option value="436">Huyện Đa Krông</option>
<option value="437">Thành phố Đông Hà</option>
<option value="438">Huyện Gio Linh</option>
<option value="439">Huyện Hải Lăng</option>
<option value="440">Thị xã Quảng Trị</option> 
<option value="441">Huyện Vĩnh Linh</option> 
<option value="668">Huyện Hướng Hóa</option> 
<option value="669">Huyện Triệu Phong</option>
`);
    }

    else if ($('#city').val() == "46") {
        $('#district .item').remove();
        $('#district').append(`
 <option value="">-- Chọn Quận/Huyện --</option>
            <option value = "442" > Huyện Cù Lao Dung</option>
<option value="443">Huyện Kế Sách</option> 
<option value="444">Huyện Long Phú</option> 
<option value="445">Huyện Mỹ Tú</option> 
<option value="446">Huyện Mỹ Xuyên</option> 
<option value="447">Huyện Ngã Năm</option>
<option value="448">Thành phố Sóc Trăng</option>
<option value="449">Huyện Thạnh Trị</option>
<option value="450">Thị Xã Vĩnh Châu</option>
<option value="451">Huyện Châu Thành</option> 
<option value="670">Huyện Trần Đề</option>
`);
    }

    else if ($('#city').val() == "47") {
        $('#district .item').remove();
        $('#district').append(`
 <option value="">-- Chọn Quận/Huyện --</option>
            <option value = "452" > Huyện Bắc Yên</option>
<option value="453">Huyện Mộc Châu</option>
<option value="454">Huyện Phù Yên</option> 
<option value="455">Huyện Quỳnh Nhai</option> 
<option value="456">Huyện Sông Mã</option>
<option value="457">Huyện Sốp Cộp</option> 
<option value="458">Thành phố Sơn La</option>
<option value="459">Huyện Thuận Châu</option>
<option value="460">Huyện Yên Châu</option> 
<option value="671">Huyện Mai Sơn</option> 
<option value="672">Huyện Mường La</option> 
<option value="707">Huyện Vân Hồ</option>
`);
    }

    else if ($('#city').val() == "48") {
        $('#district .item').remove();
        $('#district').append(`
 <option value="">-- Chọn Quận/Huyện --</option>
            <option value = "461" > Huyện Bến Cầu</option>
<option value="462">Huyện Châu Thành</option>
<option value="463">Huyện Dương Minh Châu</option>
<option value="464">Huyện Gò Dầu</option>
<option value="465">Huyện Hòa Thành</option>
<option value="466">Huyện Tân Biên</option> 
<option value="467">Huyện Tân Châu</option> 
<option value="468">Thị xã Tây Ninh</option>
<option value="469">Huyện Trảng Bàng</option>
`);
    }

    else if ($('#city').val() == "49") {
        $('#district .item').remove();
        $('#district').append(`
 <option value="">-- Chọn Quận/Huyện --</option>
            <option value = "482" > Huyện Đông Hưng</option>
<option value="483">Huyện Hưng Hà</option> 
<option value="484">Huyện Kiến Xương</option>
<option value="485">Huyện Quỳnh Phụ</option>
<option value="486">Thành phố Thái Bình</option> 
<option value="487">Huyện Thái Thụy</option>
<option value="488">Huyện Tiền Hải</option> <option value="489">Huyện Vũ Thư</option>
`);
    }

    else if ($('#city').val() == "50") {
        $('#district .item').remove(); 
        $('#district').append(`
 <option value="">-- Chọn Quận/Huyện --</option>
            <option value = "490" > Huyện Đại Từ</option>
<option value="491">Huyện Đồng Hỷ</option> 
<option value="492">Thị xã Sông Công</option>
<option value="493">Thành phố Thái Nguyên</option>
<option value="673">Huyện Định Hóa</option>
<option value="674">Huyện Phổ Yên</option> 
<option value="675">Huyện Phú Bình</option> 
<option value="676">Huyện Phú Lương</option> 
<option value="677">Huyện Võ Nhai</option>
`);
    }

    else if ($('#city').val() == "51") {
        $('#district .item').remove();
        $('#district').append(`
 <option value="">-- Chọn Quận/Huyện --</option>
            <option value = "494"> Huyện Bá Thước</option>
<option value="495">Thị xã Bỉm Sơn</option> 
<option value="496">Huyện Cẩm Thủy</option> 
<option value="497">Huyện Hà Trung</option> 
<option value="498">Huyện Hậu Lộc</option> 
<option value="499">Huyện Hoằng Hóa</option>
<option value="500">Huyện Lang Chánh</option>
<option value="501">Huyện Mường Lát</option> 
<option value="502">Huyện Nga Sơn</option>
<option value="503">Huyện Ngọc Lặc</option>
<option value="504">Huyện Nông Cống</option>
<option value="505">Huyện Quan Hóa</option>
<option value="506">Huyện Quan Sơn</option>
<option value="507">Huyện Quảng Xương</option>
<option value="508">Thị xã Sầm Sơn</option> 
<option value="509">Huyện Thạch Thành</option> 
<option value="510">Thành phố Thanh Hóa</option> 
<option value="511">Huyện Thiệu Hóa</option> 
<option value="512">Huyện Thọ Xuân</option> 
<option value="513">Huyện Thường Xuân</option> 
<option value="514">Huyện Tĩnh Gia</option> 
<option value="515">Huyện Triệu Sơn</option>
<option value="516">Huyện Vĩnh Lộc</option>
<option value="517">Huyện Yên Định</option> 
<option value="678">Huyện Đông Sơn</option> 
<option value="679">Huyện Như Thanh</option>
<option value="680">Huyện Như Xuân</option>
`);
    }

    else if ($('#city').val() == "52") {
        $('#district .item').remove();
        $('#district').append(`
 <option value="">-- Chọn Quận/Huyện --</option>
            <option value = "65"> Huyện A Lưới</option>
<option value="67">Huyện Nam Đông</option> 
<option value="68">Huyện Phong Điền</option> 
<option value="69">Huyện Phú Lộc</option>
<option value="70">Huyện Phú Vang</option>
<option value="71">Huyện Quảng Điền</option>
<option value="72">Thị xã Hương Thủy</option>
<option value="556">Thành phố Huế</option>
<option value="704">Thị xã Hương Trà</option>
`);
    }

    else if ($('#city').val() == "53") {
        $('#district .item').remove();
        $('#district').append(`
 <option value="">-- Chọn Quận/Huyện --</option>
            <option value = "470"> Thị xã Cai Lậy</option> 
<option value="471">Huyện Cái Bè</option> 
<option value="472">Huyện Chợ Gạo</option> 
<option value="473">Thị xã Gò Công</option> 
<option value="474">Thành phố Mỹ Tho</option> 
<option value="475">Huyện Tân Phước</option> 
<option value="681">Huyện Châu Thành</option> 
<option value="682">Huyện Gò Công Đông</option>
<option value="683">Huyện Gò Công Tây</option>
<option value="684">Huyện Tân Phú Đông</option>
<option value="718">Huyện Cai Lậy</option>
`);
    }

    else if ($('#city').val() == "54") {
        $('#district .item').remove();
        $('#district').append(`
 <option value="">-- Chọn Quận/Huyện --</option>
            <option value = "518"> Huyện Càng Long</option>
<option value="519">Huyện Cầu Kè</option>
<option value="520">Huyện Cầu Ngang</option>
<option value="521">Huyện Châu Thành</option>
<option value="522">Thị xã Duyên Hải</option>
<option value="523">Huyện Tiểu Cần</option>
<option value="524">Huyện Trà Cú</option> 
<option value="525">Thành phố Trà Vinh</option> 
<option value="717">Huyện Duyên Hải</option>
`);
    }

    else if ($('#city').val() == "55") {
        $('#district .item').remove();
        $('#district').append(`
 <option value="">-- Chọn Quận/Huyện --</option>
            <option value = "476" > Huyện Chiêm Hóa</option>
<option value="477">Huyện Hàm Yên</option>
<option value="478">Huyện Na Hang</option> 
<option value="479">Huyện Sơn Dương</option> 
<option value="480">Thành phố Tuyên Quang</option> 
<option value="481">Huyện Yên Sơn</option> 
<option value="690">Huyện Lâm Bình</option>
`);
    }

    else if ($('#city').val() == "56") {
        $('#district .item').remove();
        $('#district').append(`
 <option value="">-- Chọn Quận/Huyện --</option>
            <option value = "526" > Huyện Bình Minh</option>
<option value="527">Huyện Bình Tân</option> 
<option value="528">Huyện Long Hồ</option>
<option value="529">Huyện Mang Thít</option>
<option value="530">Huyện Tam Bình</option>
<option value="531">Huyện Trà Ôn</option>
<option value="532">Thành phố Vĩnh Long</option>
<option value="533">Huyện Vũng Liêm</option>
`);
    }

    else if ($('#city').val() == "57") {

        $('#district .item').remove();
        $('#district').append(`
 <option value="">-- Chọn Quận/Huyện --</option>
            <option value = "534"> Huyện Bình Xuyên</option>
<option value="535">Huyện Lập Thạch</option>
<option value="536">Thị xã Phúc Yên</option>
<option value="537">Huyện Vĩnh Tường</option>
<option value="538">Thành phố Vĩnh Yên</option>
<option value="539">Huyện Yên Lạc</option> 
<option value="540">Huyện Tam Đảo</option> 
<option value="691">Huyện Sông Lô</option>
<option value="692">Huyện Tam Dương</option>
            `);
    }

    else if ($('#city').val() == "58") {
        $('#district .item').remove();
        $('#district').append(`
 <option value="">-- Chọn Quận/Huyện --</option>
            <option value = "541"> Huyện Mù Căng Chải</option>
<option value="542">Thị xã Nghĩa Lộ</option> 
<option value="543">Huyện Trạm Tấu</option>
<option value="544">Thành phố Yên Bái</option>
<option value="545">Huyện Yên Bình</option>
<option value="693">Huyện Lục Yên</option>
<option value="694">Huyện Trấn Yên</option>
<option value="695">Huyện Văn Chấn</option>
<option value="696">Huyện Văn Yên</option>
            `);
    }

    else if ($('#city').val() == "59") {
        $('#district .item').remove();
        $('#district').append(`
 <option value="">-- Chọn Quận/Huyện --</option>
            <option value = "170" > Huyện Buôn Đôn</option>
<option value="172">Thành phố Buôn Ma Thuột</option> 
<option value="173">Huyện Cư Kuin</option> 
<option value="174">Huyện Ea H'leo</option>
<option value="175">Huyện Ea Kar</option> 
<option value="176">Huyện Ea Súp</option> 
<option value="177">Huyện Krông Ana</option>
<option value="178">Huyện Krông Bông</option>
<option value="179">Huyện Krông Búk</option> 
<option value="180">Huyện Krông Năng</option>
<option value="181">Huyện Krông Pắk</option> 
<option value="182">Huyện M'Đrăk</option>
<option value="183">Thị xã Buôn Hồ</option> 
<option value="587">Huyện Cư Mgar</option> 
<option value="588">Huyện Lăk</option>
            `);
    }

    else if ($('#city').val() == "60") {
        $('#district .item').remove();
        $('#district').append(`
 <option value="">-- Chọn Quận/Huyện --</option>
            <option value = "184" > Huyện Đăk Glong</option> 
<option value="185">Huyện Đăk Mil</option> 
<option value="186">Huyện Đăk R'Lấp</option>
<option value="187">Huyện Đăk Song</option> 
<option value="188">Thị xã Gia Nghĩa</option>
<option value="189">Huyện Tuy Đức</option>
<option value="589">Huyện Cư Jút</option> 
<option value="590">Huyện Krông Nô</option>
            `);
    }
    else if ($('#city').val() == "61") {
        $('#district .item').remove();
        $('#district').append(`
 <option value="">-- Chọn Quận/Huyện --</option>
            <option value = "546" > Huyện Điện Biên</option>
<option value="547">Huyện Điện Biên Đông</option>
<option value="548">Thành phố Điện Biên Phủ</option>
<option value="549">Huyện Mường Ảng</option>
<option value="550">Huyện Mường Chà</option> 
<option value="551">Thị xã Mường Lay</option> 
<option value="552">Huyện Mường Nhé</option> 
<option value="553">Huyện Tủa Chùa</option> 
<option value="554">Huyện Tuần Giáo</option>
<option value="713">Huyện Nậm Pồ</option>
            `);
    }
    else if ($('#city').val() == "62") {
        $('#district .item').remove();
        $('#district').append(`
 <option value="">-- Chọn Quận/Huyện --</option>
            <option value = "190" > Thành phố Biên Hòa</option>
<option value="191">Huyện Cẩm Mỹ</option> 
<option value="192">Huyện Định Quán</option>
<option value="193">Thị xã Long Khánh</option>
<option value="194">Huyện Long Thành</option> 
<option value="195">Huyện Nhơn Trạch</option> 
<option value="196">Huyện Thống Nhất</option> 
<option value="197">Huyện Trảng Bom</option>
<option value="198">Huyện Vĩnh Cửu</option> 
<option value="199">Huyện Xuân Lộc</option>
<option value="200">Huyện Tân Phú</option>
            `);
    }
    else if ($('#city').val() == "63") {
        $('#district .item').remove();
        $('#district').append(`
 <option value="">-- Chọn Quận/Huyện --</option>
            <option value = "201"> Thành phố Cao Lãnh</option>
<option value="202">Huyện Cao Lãnh</option> 
<option value="203">Huyện Châu Thành</option> 
<option value="204">Thị xã Hồng Ngự</option> 
<option value="205">Huyện Lai Vung</option> 
<option value="206">Huyện Hồng Ngự</option> 
<option value="207">Huyện Lấp Vò</option>
<option value="208">Thị xã Sa Đéc</option> 
<option value="209">Huyện Tam Nông</option>
<option value="210">Huyện Tân Hồng</option> 
<option value="211">Huyện Thanh Bình</option> 
<option value="212">Huyện Tháp Mười</option>
            `);
    }
})


