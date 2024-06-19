useEffect
1. Cập nhật lại state
2. Cập nhật lại DOM (mutated)
3. Render lại UI
4. Gọi cleanup nếu deps thay đổi
5. Gọi useEffect callback

useLayoutEffect
1. Cập nhật lại state
2. Cập nhật lại DOM (mutated)
3. Gọi cleanup nếu deps thay đổi
4. Gọi useLayoutEffect callback (sync)
5. Render lại UI