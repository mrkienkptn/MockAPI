// các hàm life cycle trong class component sẽ được thay thế bằng
// cách sử dụng useEffect trong function component

useEffect(() => {
    // effect
   
}, [])

// tương đương với việc sử dụng 
ComponentDidMount(){
    //chỉ được chay 1 lần sau khi mount lần đầu
}

// ==============================================

useEffect(() => {
    // effect
    
})
// tương đương với việc sử dụng 
ComponentDidUpdate(){
    // luôn chạy sau khi render
}

//===================================================

useEffect(() => {
    // effect
    
}[/*dependency1, dependency2,...*/])
 // luôn chạy sau khi 1 trong các dependency thay đổi
// tương đương với việc sử dụng 
ComponentDidUpdate(){
   
}


//=====================================


useEffect(() => {
    // effect
    return () => {
        // function......
    }
}[])
// tương đương với việc sử dụng 
ComponentWillUnMount(){
    // chạy trước khi 1 componnet sắp bị remove khỏi DOM tree
}