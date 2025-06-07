import { type } from '@testing-library/user-event/dist/type'
import React, { useState } from 'react'

function ItemList ({itemValue, itemCart, onUpdateShopCart, searchValue}) {
    let itemlist = items;
    let buttonStyle = { background: "#f0932b", color:"white" };

    //Region SortPrice
    const sortList = ()=>{
       if(itemValue.tipe === "default" || itemValue.tipe ===" "){
        itemlist = items;
       }
       else{
        itemlist = items.filter(t => t.tipe === itemValue.tipe);
       }

       if(searchValue !== ""){
        itemlist = itemlist.filter(p => p.name.toLowerCase().includes(searchValue.toLowerCase()));
       }
    
       if(itemValue.minPrice > 0 ){
        
        itemlist = itemlist.filter(p => parseInt(p.price.replace(".","")) >= itemValue.minPrice);
       }

       if(itemValue.maxPrice > 0 ){
        
        itemlist = itemlist.filter(p => parseInt(p.price.replace(".","")) <= itemValue.maxPrice);
       }

       
    }
    //End Region

    //Region AddItem
   
    const AddItem= (item)=>{
        const shopItem = {
            itemName: item.name,
            itemCount:1,
            itemPrice:parseFloat(item.price),
            itemId:item.id,
            promoType:"",
            itemType:item.tipe,
            image:item.image,
        };

        onUpdateShopCart(shopItem);
       
        //alert( itemCart.map((i)=>(i.itemName)+ "\n") );
          alert("add 1 item: " + shopItem.itemName)  
    }

    return (
    <div>
        <div className="container-fluid "> {sortList()}
            <br/>
                <div className="row row-cols-auto">
                    {itemlist.map((p)=>( 
                        <div className="col" key={"col" + p.id}>
                            <div className="card" style={{width: "8rem", height:"20rem",  borderRadius:"12px"}}>
                                <img src={p.image} className="card-img-top mx-auto my-2" alt="..." style={{width: "7rem", height: "8rem",  borderRadius:"8px"}}/>
                                <div className="card-body">
                                    <p className="card-text">{p.name}</p>
                                    
                                    <div className="position-absolute bottom-0 start-50 translate-middle-x my-3"> 
                                        <h6 className="card-title" style={{width: "8rem", height:"20px"}}>Rp {p.price}</h6>
                                        <a href="#" className="btn" style={buttonStyle} key={"but"+p.id} onClick={() => { AddItem(p); }}>Order</a>
                                    </div>
                                    
                                </div>
                            </div>
                            <br/>
                        </div>
                    ))}
                    
                
                </div>
        </div>
           
    </div>
  );
}

export default ItemList


const items = [
    {
        name:"beras ayam jago 5kg",
        price:"40,000",
        id:"br1",
        tipe:"makanan",
        image:"https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/105/MTA-128429556/no_brand_beras_ayam_pelung_25kg_full01_dl5rxy05.jpg"
    },
    {
        name:"beras lele premium 5kg",
        price:"42.000",
        id:"br2",
        tipe:"makanan",
        image:"https://solvent-production.s3.amazonaws.com/media/images/products/2023/08/DSC_0423.JPG"
    },
    {
        name:"beras setra 5kg",
        price:"44.000",
        id:"br3",
        tipe:"makanan",
        image:"https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/103/MTA-153337648/fs_beras-fs-melati-setra-ramos-5-kg_full01.jpg"
    },
    {
        name:"beras ayam jago 10kg",
        price:"80.000",
        id:"br4",
        tipe:"makanan",
        image:"https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/105/MTA-128429556/no_brand_beras_ayam_pelung_25kg_full01_dl5rxy05.jpg"
    },
    {
        name:"beras lele premium 10kg",
        price:"82.000",
        id:"br5",
        tipe:"makanan",
        image:"https://solvent-production.s3.amazonaws.com/media/images/products/2023/08/DSC_0423.JPG"
    },
    {
        name:"beras setra 10kg",
        price:"84.000",
        id:"br6",
        tipe:"makanan",
        image:"https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/103/MTA-153337648/fs_beras-fs-melati-setra-ramos-5-kg_full01.jpg"
    },
    {
        name:"telur ayam kampung 12 butir",
        price:"20.000",
        id:"br7",
        tipe:"makanan",
        image:"https://cdn.grid.id/crop/0x0:0x0/700x465/photo/2024/04/29/telur-ayam-kampungjpg-20240429073418.jpg"
    },
    {
        name:"telur ayam negeri 12 butir",
        price:"22.000",
        id:"br8",
        tipe:"makanan",
        image:"https://pasarsegar.co.id/wp-content/uploads/2022/12/image_picker4976567524682763971-1.jpg"
    },
    {
        name:"telur ayam omega 12 butir",
        price:"24.000",
        id:"br9",
        tipe:"makanan",
        image:"https://pasarsegar.co.id/wp-content/uploads/2022/12/image_picker4976567524682763971-1.jpg"
    },
    {
        name:"daging ayam 1 ekor",
        price:"28.000",
        id:"br10",
        tipe:"makanan",
        image:"https://diperpa.badungkab.go.id/storage/olds/diperpa/Cara-Memilih-Daging-Ayam-Potong-Yang-Segar-Dan-Sehat_138302.jpg"
    },
    {
        name:"daging ayam kampung 1 ekor",
        price:"30.000",
        id:"br11",
        tipe:"makanan",
        image:"https://diperpa.badungkab.go.id/storage/olds/diperpa/Cara-Memilih-Daging-Ayam-Potong-Yang-Segar-Dan-Sehat_138302.jpg"
    },
    {
        name:"daging sapi lokal 100 gram",
        price:"30.000",
        id:"br12",
        tipe:"makanan",
        image:"https://asset.kompas.com/crops/o6zdc0_3Z-kxUrW8nYaKeglbojo=/0x28:1000x695/750x500/data/photo/2021/07/14/60ee4d217d0f3.jpg"
    },
    {
        name:"daging sapi lokal 150 gram",
        price:"45.000",
        id:"br13",
        tipe:"makanan",
        image:"https://asset.kompas.com/crops/o6zdc0_3Z-kxUrW8nYaKeglbojo=/0x28:1000x695/750x500/data/photo/2021/07/14/60ee4d217d0f3.jpg"
    },
    {
        name:"daging sapi lokal 200 gram",
        price:"60.000",
        id:"br14",
        tipe:"makanan",
        image:"https://asset.kompas.com/crops/o6zdc0_3Z-kxUrW8nYaKeglbojo=/0x28:1000x695/750x500/data/photo/2021/07/14/60ee4d217d0f3.jpg"
    },
    {
        name:"kecap abc 250ml",
        price:"12.500",
        id:"br15",
        tipe:"makanan",
        image:"https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/99/MTA-157416732/abc_abc-kecap-manis-135ml_full01.jpg"
    },
    {
        name:"kecap bango 250ml",
        price:"14.500",
        id:"br16",
        tipe:"makanan",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDBIUvY-KRFwpFPZ_0ucHSmr9Yl_Q1JuVcfw&s"
    },
    {
        name:"sambal indofood 250ml",
        price:"14.500",
        id:"br17",
        tipe:"makanan",
        image:"https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/98/MTA-168408133/indofood_indofood_sambal_pedas_botol_-335_ml-_full04_i3bomf2v.jpg"
    },
    {
        name:"sambal abc super pedas 250ml",
        price:"14.000",
        id:"br18",
        tipe:"makanan",
        image:"https://c.alfagift.id/product/1/1_A6801330000993_20240910142640790_base.jpg"
    },
    {
        name:"susu prenagen ibu hamil 250gr",
        price:"32.000",
        id:"br19",
        tipe:"minuman",
        image:"https://d2qjkwm11akmwu.cloudfront.net/products/768426_8-6-2021_11-33-49-1665776608.webp"
    },
    {
        name:"susu SGM 1+ 600gr",
        price:"20.000",
        id:"br20",
        tipe:"minuman",
        image:"https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/106/MTA-125709378/no-brand_no-brand_full01.jpg"
    },
    {
        name:"susu SGM 3+ 600gr",
        price:"25.500",
        id:"br21",
        tipe:"minuman",
        image:"https://d3bbrrd0qs69m4.cloudfront.net/images/product/apotek_online_k24klik_2021052011560923085_Hero-Image-Thumbnail-SGM-Eksplor-Belajar-3--Vanila-400g.png"
    },
    {
        name:"nescafe clasic 250ml",
        price:"8.000",
        id:"br22",
        tipe:"minuman",
        image:"https://c.alfagift.id/product/1/1_A12790004898_20241125172628619_base.jpg"
    },
    {
        name:"fanta 300ml",
        price:"8.500",
        id:"br23",
        tipe:"minuman",
        image:"https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//89/MTA-10209038/fanta_fanta_botol_390ml_i_isi_12pcs_-_pack_full02_m1825i94.jpg"
    },
    {
        name:"sprite 300ml",
        price:"8.500",
        id:"br24",
        tipe:"minuman",
        image:"https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/91/MTA-101451860/sprite_sprite_soft_drink_390ml_-_sprite_botol_390_ml_full02_nfmiqrb4.jpg"
    },
    {
        name:"cocal cola 300ml",
        price:"8.500",
        id:"br25",
        tipe:"minuman",
        image:"https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//605/coca-cola_coca-cola-seru---12-x390-ml--_full02.jpg"
    },
    {
        name:"ichi ocha 500ml",
        price:"5.000",
        id:"br26",
        tipe:"minuman",
        image:"https://arti-assets.sgp1.cdn.digitaloceanspaces.com/renyswalayanku/products/47bd5289-340a-4635-ac8c-9abcf0802a51.jpg"
    },
    {
        name:"ultra coklat 200ml",
        price:"4.000",
        id:"br27",
        tipe:"minuman",
        image:"https://c.alfagift.id/product/1/1_A13170001039_20230705101643685_base.jpg"
    },
    {
        name:"ultra skim 250ml",
        price:"5.000",
        id:"br28",
        tipe:"minuman",
        image:"https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/3/14/ee739f26-b1da-489c-b3a8-c06e094c82a1.jpg"
    },
    {
        name:"ultra strawberry 250ml",
        price:"5.000",
        id:"br29",
        tipe:"minuman",
        image:"https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//99/MTA-7739108/ultra_jaya_whs_-_ultra_milk_strawberry_susu_uht_-250_ml-_24_pcs-_karton-_full01_ch9xxm1a.jpg"
    },
    {
        name:"teh gelas 200ml",
        price:"2.000",
        id:"br30",
        tipe:"minuman",
        image:"https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/2/24/59d495b9-a873-424f-a145-2476d7f53384.jpg"
    },
    {
        name:"teh pucuk 350ml",
        price:"3.000",
        id:"br31",
        tipe:"minuman",
        image:"https://down-id.img.susercontent.com/file/id-11134207-7rasm-m1pd1159unuj93"
    },
    {
        name:"aqua 600ml",
        price:"3.500",
        id:"br32",
        tipe:"minuman",
        image:"https://images.tokopedia.net/img/cache/500-square/hDjmkQ/2021/5/5/6d1994fe-2f02-49ad-b34d-34467eda7ad7.jpg"
    },
    {
        name:"le mineral 600ml",
        price:"3.500",
        id:"br33",
        tipe:"minuman",
        image:"https://c.alfagift.id/product/1/1_A12460990365_20230801161245423_base.jpg"
    },
    {
        name:"indomie ayam bawang",
        price:"3.000",
        id:"br34",
        tipe:"makanan",
        image:"https://core.oramiland.com/media/CACHE/images/products/183917/NOOD-INDO-32A/9629e0cee4b3234e5e0a4ce87446b07b.jpg"
    },
    {
        name:"indomie soto ayam",
        price:"3.000",
        id:"br35",
        tipe:"makanan",
        image:"https://primafreshmart.com/pub/media/catalog/product/cache/bd9d9537e331c9319bbbb23b5f2a0c51/i/n/indomie_soto_mie.jpg"
    },
    {
        name:"indomie goreng",
        price:"3.000",
        id:"br36",
        tipe:"makanan",
        image:"https://c.alfagift.id/product/1/1_A7549730001037_20230105135126229_base.png"
    },
    {
        name:"indomie goreng cabe hijau",
        price:"3.000",
        id:"br37",
        tipe:"makanan",
        image:"https://down-id.img.susercontent.com/file/id-11134207-7r98o-lq9fnln55pfq63"
    },
    {
        name:"indomie goreng jumbo",
        price:"4.000",
        id:"br38",
        tipe:"makanan",
        image:"https://yoline.co.id/media/products/ProductIndomie_goreng_special_jumbo_129gr.png"
    },
    {
        name:"mie sedap ayam special",
        price:"2.900",
        id:"br39",
        tipe:"makanan",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8llcxwdwL2m70gIMfkVYOZqnreUug2gIF1g&s"
    },
    {
        name:"mie sedap kare special",
        price:"2.900",
        id:"br40",
        tipe:"makanan",
        image:"https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//92/MTA-2583245/sedaap_sedaap-kari-special-mie-instan--75-g-_full02.jpg"
    },
    {
        name:"samyang hot noodle",
        price:"6.500",
        id:"br41",
        tipe:"makanan",
        image:"https://image.astronauts.cloud/product-images/2024/5/SamyangHotChickenRamenOriginalold_0e631743-2491-4243-87ab-8b056bf02364_900x900.png"
    },
    {
        name:"super bubur rasa ayam",
        price:"3.000",
        id:"br42",
        tipe:"makanan",
        image:"https://arti-assets.sgp1.cdn.digitaloceanspaces.com/renyswalayanku/products/05408207-6717-4793-8226-66cf89b0f665.jpg"
    },
    {
        name:"buku tulis sidu 30lbr",
        price:"4.500",
        id:"br43",
        tipe:"tools",
        image:"https://champion.id/wp-content/uploads/2019/09/Buku-Tulis-Sidu-78-Lembar-isi-5.jpg"
    },
    {
        name:"buku tulis sidu 50lbr",
        price:"6.000",
        id:"br44",
        tipe:"tools",
        image:"https://champion.id/wp-content/uploads/2019/09/Buku-Tulis-Sidu-78-Lembar-isi-5.jpg"
    },
    {
        name:"buku gambar sidu 15lbr",
        price:"5.000",
        id:"br45",
        tipe:"tools",
        image:"https://id-live-01.slatic.net/p/d96892d0a9a3cd8acfaf1df740793382.jpg"
    },
    {
        name:"buku gambar sidu 25lbr",
        price:"6.500",
        id:"br46",
        tipe:"tools",
        image:"https://id-live-01.slatic.net/p/5b5035e87877e902a63717dcb50ce850.jpg"
    },
    {
        name:"pulpen pilot 0.5 hitam",
        price:"2.000",
        id:"br47",
        tipe:"tools",
        image:"https://id-test-11.slatic.net/p/98b72e142217b84fffdfb35256b46793.jpg"
    },
    {
        name:"pulpen standard 0.5 hitam",
        price:"2.500",
        id:"br48",
        tipe:"tools",
        image:"https://cdn.gramedia.com/uploads/items/DSC_0240.JPG"
    },
    {
        name:"Bimoli minyak 620ml",
        price:"17.100",
        id:"br49",
        tipe:"makanan",
        image:"https://arti-assets.sgp1.digitaloceanspaces.com/dutalia/products/6e2e1141-d896-48b4-813b-acfb382d8d84.jpg"
    },
    {
        name:"Bimoli minyak goreng 1L",
        price:"21.900",
        id:"br50",
        tipe:"makanan",
        image:"https://arti-assets.sgp1.cdn.digitaloceanspaces.com/renyswalayanku/products/d97d3c86-bed6-441d-9f83-a41b3712b8d5.jpg"
    },
    {
        name:"Bimoli minyak goreng 2L",
        price:"38.900",
        id:"br51",
        tipe:"makanan",
        image:"https://arti-assets.sgp1.cdn.digitaloceanspaces.com/renyswalayanku/products/d97d3c86-bed6-441d-9f83-a41b3712b8d5.jpg"
    },
    {
        name:"Fortune minyak goreng 1L",
        price:"22.200",
        id:"br52",
        tipe:"makanan",
        image:"https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/103/MTA-179001848/fortune_bandung_-_fortune_minyak_goreng_-2000_ml-_pouch-_full02_s8rtg6u0.jpg"
    },
    {
        name:"Fortune minyak goreng 2L",
        price:"37.000",
        id:"br53",
        tipe:"makanan",
        image:"https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/103/MTA-179001848/fortune_bandung_-_fortune_minyak_goreng_-2000_ml-_pouch-_full02_s8rtg6u0.jpg"
    },
    {
        name:"Tropical minyak goreng 1L",
        price:"21.200",
        id:"br54",
        tipe:"makanan",
        image:"https://solvent-production.s3.amazonaws.com/media/images/products/2021/04/2357a.jpg"
    },
    {
        name:"Tropical minyak goreng 2L",
        price:"45.200",
        id:"br55",
        tipe:"makanan",
        image:"https://solvent-production.s3.amazonaws.com/media/images/products/2021/04/2357a.jpg"
    },
    {
        name:"Mentega Blueband 200g",
        price:"9.810",
        id:"br56",
        tipe:"makanan",
        image:"https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//95/MTA-13183718/blue_band_blue_band_mentega_-200_g-_full01_hka3s03n.jpg"
    },
    {
        name:"Filma Margarine 200g",
        price:"7.400",
        id:"br57",
        tipe:"makanan",
        image:"https://down-id.img.susercontent.com/file/id-11134201-7qukz-lijoa2r3qz6e4a"
    },
    {
        name:"Tepung Sajiku serba guna 220g",
        price:"7.400",
        id:"br58",
        tipe:"makanan",
        image:"https://i0.wp.com/raisa.aeonstore.id/wp-content/uploads/2023/04/1393521.jpg?fit=608%2C800&ssl=1"
    },
    {
        name:"Tepung Racik serba guna 210g",
        price:"7.700",
        id:"br59",
        tipe:"makanan",
        image:"https://image.astronauts.cloud/product-images/2024/4/IndofoodRacikTepungBumbuSerbaguna1_24d0a0e2-2ddb-4837-9716-22fd5bbad571_900x900.png"
    },
    {
        name:"Tepung Sasa Hot serba guna 70g",
        price:"2.500",
        id:"br60",
        tipe:"makanan",
        image:"https://solvent-production.s3.amazonaws.com/media/images/products/2021/03/1310a.jpg"
    },
    {
        name:"Indomilk cokelat 190ml",
        price:"3.750",
        id:"br61",
        tipe:"minuman",
        image:"https://arti-assets.sgp1.cdn.digitaloceanspaces.com/renyswalayanku/products/044e27fd-c3dd-4eaf-9495-849821eaef7d.jpg"
    },
    {
        name:"Indomilk strawberry 190ml",
        price:"3.750",
        id:"br62",
        tipe:"minuman",
        image:"https://down-id.img.susercontent.com/file/f92621727c2cf2567a6434ba64d4c5c2"
    },
    {
        name:"Indomilk melon 190ml",
        price:"3.750",
        id:"br63",
        tipe:"minuman",
        image:"https://raisa.aeonstore.id/wp-content/uploads/2023/04/1207644.jpg"
    },
    {
        name:"Smax ring 40g",
        price:"4.500",
        id:"br64",
        tipe:"makanan",
        image:"https://c.alfagift.id/product/1/1_A09870002067_20210804230239083_base.jpg"
    },
    {
        name:"Taro bbq 32g",
        price:"5.700",
        id:"br65",
        tipe:"makanan",
        image:"https://c.alfagift.id/product/1/1_A09870002437_20220722103753424_base.jpg"
    },
    {
        name:"Qtela balado 60g",
        price:"5.370",
        id:"br66",
        tipe:"makanan",
        image:"https://www.mirotakampus.com/resources/assets/images/product_images/1725974664.Copy%20of%20Salinan%20Pack%20QTELA%20Singkong%20BALADO%2060.jpg"
    },
    {
        name:"Kusuka rumput laut 180g",
        price:"15.500",
        id:"br67",
        tipe:"makanan",
        image:"https://arti-assets.sgp1.cdn.digitaloceanspaces.com/megaswalayan/products/403e58b4-c01d-4979-b3de-4e9ce498d36a.jpg"
    },
    {
        name:"Chitato keju 68g",
        price:"9.590",
        id:"br68",
        tipe:"makanan",
        image:"https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/MTA-10880791/chitato_chitato_cheese_supreme_68_gr_full02_d69tur4t.jpeg"
    },
    {
        name:"Joyko pencil 2B",
        price:"19.980",
        id:"br69",
        tipe:"tools",
        image:"https://storage.googleapis.com/eezee-product-images/pensil-2b-joyko-dhds_600.png"
    },
    {
        name:"Kenko pencil 2B",
        price:"18.590",
        id:"br70",
        tipe:"tools",
        image:"https://shop.kenko.co.id/image/cache/catalog/product/Pencil/Pencil-2B-3181-Triangular-700x700.jpg"
    },
    {
        name:"Penghapus Faber Castle",
        price:"8.590",
        id:"br71",
        tipe:"tools",
        image:"https://down-id.img.susercontent.com/file/47e75d28a3baca9f304ab31e261d7541"
    },
    {
        name:"Staedler penghapus pensil",
        price:"5.090",
        id:"br72",
        tipe:"tools",
        image:"https://i2.wp.com/besemahpustaka.com/wp-content/uploads/2021/03/Penghapus-Pensil-5000.jpg?fit=800%2C800&ssl=1"
    },
    {
        name:"Typex Faber Castle",
        price:"4.590",
        id:"br73",
        tipe:"tools",
        image:"https://down-id.img.susercontent.com/file/d3c0a312821156b6d8c0d31fc22d46d7"
    },
    {
        name:"Typex Joyko",
        price:"6.200",
        id:"br74",
        tipe:"tools",
        image:"https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//105/MTA-85072577/pustaka_baru_press_typex_joyko_jk_101_penghapus_cair_correction_fluid_ozon_save_cepat_kering_full01_j4q5qdrq.jpg"
    },
    {
        name:"Joyco Twist Crayon 12",
        price:"19.300",
        id:"b75",
        tipe:"tools",
        image:"https://www.toyibs.com/wp-content/uploads/2021/10/WhatsApp-Image-2021-10-07-at-14.32.21-2.jpeg"
    },
    {
        name:"Crayons mini 24",
        price:"35.700",
        id:"br76",
        tipe:"tools",
        image:"https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/90/MTA-164470120/no_brand_crayon_krayon_24_colors_-_pensil_crayon_24_warna_-_pensil_warna_full01_j4wirhe7.jpg"
    },
    {
        name:"Cat air 12 warna",
        price:"16.000",
        id:"br77",
        tipe:"tools",
        image:"https://id-live-01.slatic.net/p/466b27b0c352c86bcf140414a088969c.jpg"
    },
    {
        name:"Kuas lukis",
        price:"1.500",
        id:"br78",
        tipe:"tools",
        image:"https://img.lazcdn.com/g/p/e9cf02dbc2db45752f3311cc6bf0dab0.jpg_720x720q80.jpg"
    },
    {
        name:"Palet cat air",
        price:"9.590",
        id:"br79",
        tipe:"tools",
        image:"https://img.lazcdn.com/g/p/22f07fdd559c9b0d351e853fc0e782b7.jpg_720x720q80.jpg"
    },
    {
        name:"Sidu A4 70gr 1 Rim",
        price:"51.100",
        id:"br80",
        tipe:"tools",
        image:"https://static.wixstatic.com/media/005dbd_951c7b2743624268bf9ba189a0734115~mv2.png/v1/fit/w_500,h_500,q_90/file.png"
    },
    {
        name:"Paper one A4 80gr 1 rim",
        price:"55.600",
        id:"br81",
        tipe:"tools",
        image:"https://datascripmall.id/media/webp_image/catalog/product/cache/95a5307f46190cd7a50cf0819ebeb220/f/8/f8f0be41-fbf8-45d2-8435-be4313242db0.webp"
    },
    {
        name:"Snowman boardmarker",
        price:"6.500",
        id:"br82",
        tipe:"tools",
        image:"https://c.alfagift.id/product/1/1_A21790041575_20210809144442174_base.jpg"
    },
    {
        name:"Gunting Kenko",
        price:"12.500",
        id:"br83",
        tipe:"tools",
        image:"https://storage.googleapis.com/eezee-product-images/gunting-sedang-838-kenko-eb1q_600.png"
    },
    {
        name:"Cutter Kenko kecil",
        price:"6.500",
        id:"br84",
        tipe:"tools",
        image:"https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//93/MTA-3440774/kenko_kenko-a-300-pisau-cutter-aksesoren_full06.jpg"
    },
    {
        name:"Isolasi bening kecil",
        price:"5.890",
        id:"br85",
        tipe:"tools",
        image:"https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//76/MTA-3021312/daimaru_daimaru-isolasi---bening--24-mm-x-72-yard-_full02.jpg"
    },
    {
        name:"Isolasi besar",
        price:"6.500",
        id:"br86",
        tipe:"tools",
        image:"https://down-id.img.susercontent.com/file/2d7e0f846ea5cc6a640940cdf7df413f"
    },
    {
        name:"Isolasi listrik",
        price:"8.800",
        id:"br87",
        tipe:"tools",
        image:"https://img.lazcdn.com/g/p/0c3b911bd8c9d2061fed98ff153a19f1.jpg_720x720q80.jpg"
    },
    {
        name:"Golda coffe latte 350ml",
        price:"3.750",
        id:"br88",
        tipe:"minuman",
        image:"https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//89/MTA-3823415/golda_minuman-kopi-golda-200ml-botol-dolce-latte_full02.jpg"
    },
    {
        name:"Tora cafe capucino 350ml",
        price:"5.500",
        id:"br89",
        tipe:"minuman",
        image:"https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//111/MTA-85178973/mayora_tora_cafe_minuman_iced_cappucino_botol_full03_mxvzki9h.jpg"
    },
    {
        name:"Myzone Lychee 500ml",
        price:"5.200",
        id:"br90",
        tipe:"minuman",
        image:"https://image.indonetwork.co.id/f-webp/products/thumbs/600x600/2019/01/18/5cc46276-da54-4443-ae83-358ac4c4f386.jpeg"
    },
    {
        name:"Pocari sweat 500ml",
        price:"7.900",
        id:"br91",
        tipe:"minuman",
        image:"https://mcgrocer.com/cdn/shop/files/image_48108f24-3ea4-4df2-b3a8-1ecaa8750096.jpg?v=1736717611"
    },
    {
        name:"Buavita Lychee 250ml",
        price:"8.400",
        id:"br92",
        tipe:"minuman",
        image:"https://www.unileverfoodsolutions.co.id/dam/global-ufs/mcos/SEA/calcmenu/products/ID-products/packshots/foodsolutions/buavita-lychee-250ml/Buavita%20Lychee%20Shotpack.jpg"
    },
    {
        name:"Buavita Orange 250ml",
        price:"8.400",
        id:"br93",
        tipe:"minuman",
        image:"https://yoline.co.id/media/products/ProductBuavitaorange245ml.webp"
    },
    {
        name:"Buavita mangga 250ml",
        price:"8400",
        id:"br94",
        tipe:"minuman",
        image:"https://yoline.co.id/media/products/ProductBuavitamango245ml.png"
    },
    {
        name:"Buavita jambu 250ml",
        price:"8.400",
        id:"br95",
        tipe:"minuman",
        image:"https://www.buavita.co.id/uploads/guavaoverlay.png"
    },
    {
        name:"Yakult 65ml",
        price:"12.500",
        id:"br96",
        tipe:"minuman",
        image:"https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//105/MTA-46974435/yakult_yakult_minuman_probiotik_65ml_1_pak_isi_5_pcs_full01_biczhy4o.jpg"
    },
    {
        name:"Senter LED Kecil",
        price:"35.500",
        id:"br97",
        tipe:"electronic",
        image:"https://cdn.ruparupa.io/fit-in/400x400/filters:format(webp)/filters:quality(90)/ruparupa-com/image/upload/Products/10545072_1.jpg"
    },
    {
        name:"Senter LED Police",
        price:"51.100",
        id:"br98",
        tipe:"electronic",
        image:"https://images.tokopedia.net/img/cache/700/product-1/2018/4/3/458544/458544_78dc3eba-b140-4ecd-86e6-bb82b3d7898d_770_770.jpg"
    },
    {
        name:"Senter LED 7W",
        price:"145.500",
        id:"br99",
        tipe:"electronic",
        image:"https://cdn.ruparupa.io/fit-in/400x400/filters:format(webp)/filters:quality(90)/ruparupa-com/image/upload/Products/10150793_1.jpg"
    },
    {
        name:"ABC Alkaline isi 2",
        price:"14.000",
        id:"br100",
        tipe:"electronic",
        image:"https://siopen.balangankab.go.id/storage/merchant/products/2024/05/06/c8fb604bc6d87db036251ebdf131ffc5.jpg"
    },
    {
        name:"Energizer Max isi 2",
        price:"25.500",
        id:"br101",
        tipe:"electronic",
        image:"https://c.alfagift.id/product/1/1_A08140041548_20240612164351599_base.jpg"
    },
    {
        name:"Eveready isi 4",
        price:"10.500",
        id:"br102",
        tipe:"electronic",
        image:"https://imgx.brdcdn.com/imgx/500/aW1hZ2VzLnRva29wZWRpYS5uZXQvaW1nL2NhY2hlLzcwMC9wcm9kdWN0LTEvMjAxNi84LzI3LzUxNDg5MjcvNTE0ODkyN183ODViZDYwNC0yMzgxLTQ5NDYtYTk3ZC1iZDg0ZDk0NTViODM=.jpg"
    },
    {
        name:"ABC isi 4",
        price:"15.200",
        id:"br103",
        tipe:"electronic",
        image:"https://c.alfagift.id/product/1/1_A08140041511_20240612165759025_base.jpg"
    },
    {
        name:"Panasonic Prima AAA isi 2",
        price:"4.500",
        id:"br104",
        tipe:"electronic",
        image:"https://static.jakmall.id/2023/02/images/products/2b3c69/detail/baterai-battery-prima-aaa-panasonic-biru-um-4u2b12-isi-2-butir.jpg"
    },
    {
        name:"ABC besar isi 2",
        price:"18.000",
        id:"br105",
        tipe:"electronic",
        image:"https://siplahtelkom.com/public/products/131262/4861148/175558.dbaacf49-b0ca-4c4f-8e74-00e4cc3afd98.5b58d1b3-d.jpg"
    },
    {
        name:"Hanoch cool white 3W",
        price:"14.500",
        id:"br106",
        tipe:"electronic",
        image:"https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//806/hannochs_hannochs-premier-lampu-led--3w-_full02.jpg"
    },
    {
        name:"Philip cool daylight 3W",
        price:"24.500",
        id:"br107",
        tipe:"electronic",
        image:"https://down-id.img.susercontent.com/file/c946c47328ccc7aa112ebfce4d1b50e6"
    },
    {
        name:"Panasonic cool daylight 5W",
        price:"27.0000",
        id:"br108",
        tipe:"electronic",
        image:"https://images.tokopedia.net/img/cache/700/product-1/2020/4/27/6380734/6380734_2a81136e-d0f4-4e76-9cca-e01a04df0f52_1440_1440.jpg"
    },
    {
        name:"Philip warm white 7W",
        price:"35.900",
        id:"br109",
        tipe:"electronic",
        image:"https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//85/MTA-43504131/no_brand_lampu_led_philips_7_watt_paling_terang_full02_f8pa0e4q.jpg"
    },
    {
        name:"Panasonic cool daylight 9W",
        price:"33.000",
        id:"br110",
        tipe:"electronic",
        image:"https://down-id.img.susercontent.com/file/8e318894c4f6c06a5d8badf4399cf3fe"
    },
    {
        name:"Kabel roll 6M",
        price:"36.500",
        id:"br111",
        tipe:"electronic",
        image:"https://id-test-11.slatic.net/p/d780f703f217cc8bcb3e8eb2a4419b16.jpg"
    },
    {
        name:"Sop kontak T",
        price:"24.500",
        id:"br112",
        tipe:"electronic",
        image:"https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//736/broco_broco-t-stop-kontak---putih_full02.jpg"
    }
]

