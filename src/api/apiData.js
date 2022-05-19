export const ApiCallForProductImage=(url)=>{
    let Promise=fetch(url)
    let image;
    Promise.then((res)=>{
        return res.json();
    }).then((category)=>{
         image=category.filter((item)=>{
             fetch("https://dummyjson.com/products/category/"+item)
             .then((res)=>{
                return res.json();
             }).then((data)=>{
                let arr=data.products;
              let images =arr[0].images[0];
              return images;
             })
        })
        return image;
    })
    
    
    
    .catch((err)=>{
        alert("oops Error while fetching ProductOmage")
    })
}