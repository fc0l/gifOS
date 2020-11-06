// // connect with trending API
// const trending_text = document.getElementById("trending");
// const trending = fetch('https://api.giphy.com/v1/gifs/trending?api_key=2HgAvudoWdCgxf4i72FF9xf1m4N2VBib&limit=25&rating=g');
// trending.then(resp => resp.json())
// .then(json => {
//     for(let i = 0;i < 3; i++){
//         trending_text.innerHTML += `<a href="${json.data[i].url}" class="trend-a">${json.data[i].title}, </a>`;
//     }
// });

// // search input key up event
// const search_box = document.getElementById("search");
// const search_results = document.getElementById("search-results");
// let resultados;
// let p = document.createElement("P");
// let search_field;

// search_box.addEventListener("keyup", function (e) {
//     search_field = search_box.value;
//     if(search_box.value != ""){
//     fetch(`https://api.giphy.com/v1/tags/related/${search_field}?api_key=2HgAvudoWdCgxf4i72FF9xf1m4N2VBib&`)
//     .then(resp => resp.json())
//     .then(json => {
//         resultados = json.data;
//         search_results.innerHTML = "";
//         for(let i = 0;i<resultados.length; i++){
//             console.log(resultados[i].name);
//             search_results.innerHTML = `<p>${resultados[i].name}</p>`;
//         }
// })    
// }})


















//     // console.log(e.target.value);
//     // let search_field = e.target.value;
//     // fetch(`https://api.giphy.com/v1/tags/related/${search_field}?api_key=2HgAvudoWdCgxf4i72FF9xf1m4N2VBib&`)
//     // .then(resp => resp.json())
//     // .then(json => {resultados = json.data;console.log(resultados);})
//      if(search_box.value != ""){    
//          fetch(`https://api.giphy.com/v1/tags/related/${e.target.value}?api_key=2HgAvudoWdCgxf4i72FF9xf1m4N2VBib&`)
//          .then(resp => resp.json())
//          .then(json => {
//              let json_length = json.data.length;
//              let i = 0;
//              let p = document.createElement("P");
//              for(i;i<json_length;i++){           
//                 const results = json.data[i].name;
//                  // search results                 
//                  p.innerText = `${results}`;
//                  search_results.appendChild(p);
//             }
//         });
//  }