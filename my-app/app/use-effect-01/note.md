1. Update DOM
2. Call API
3. Listen DOM events
  - Scroll
  - Resize
4. Cleanup
  - Remove listener / unsubcribe
  - Clear timer

- useEffect(callback)
  - Gọi callback mỗi khi component re-render
  - Gọi callback sau khi component thêm element vào DOM
- useEffect(callback, [])
  - Chỉ gọi callback 1 lần sau khi component mounted
- useEffect(callback, [deps])
  - Callback sẽ được gọi lại mỗi khi deps thay đổi (để kiểm tra deps có thay đổi hay không react sử dụng toán tử ===)

- Callback luôn được gọi sau khi component mounted
- Cleanup function luôn được gọi trước khi component unmounted

*** Vì sao không đặt document.title = title ra bên ngoài useEffect => nếu chạy đồng bộ thì UI chưa được render ra => lấy gì update title