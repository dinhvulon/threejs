# Lesson 1: Ba Thành Phần Cốt Lõi

## 🎯 Bạn sẽ học được gì

- ✅ 3 thành phần bắt buộc: Scene, Camera, Renderer
- ✅ Tạo object 3D đầu tiên (cube)
- ✅ Animation loop để làm object chuyển động
- ✅ Xử lý resize cửa sổ

## 🚀 Cách chạy

1. Mở terminal tại folder `threejs-learning/01-basic-scene`
2. Chạy local server (chọn 1 trong các cách):

**Cách 1: Python**
```bash
python -m http.server 8000
```

**Cách 2: Node.js (npx)**
```bash
npx http-server -p 8000
```

**Cách 3: VS Code Live Server**
- Cài extension "Live Server"
- Right-click vào `index.html` → "Open with Live Server"

3. Mở browser: `http://localhost:8000`

## 📖 Giải thích Code

### 1. Scene (Sân khấu)
```javascript
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x222222);
```
- Scene chứa tất cả: objects, lights, cameras
- Đặt màu nền với `scene.background`

### 2. Camera (Máy quay)
```javascript
const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
camera.position.z = 5;
```
- **FOV (75)**: Góc nhìn, càng lớn càng nhìn rộng
- **Aspect**: Tỷ lệ khung hình (width/height)
- **Near (0.1)**: Vật gần hơn không hiển thị
- **Far (1000)**: Vật xa hơn không hiển thị
- `position.z = 5`: Di chuyển camera ra xa

### 3. Renderer (Máy chiếu)
```javascript
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
```
- Vẽ scene lên canvas
- `antialias: true`: Làm mượt cạnh
- `appendChild`: Thêm canvas vào trang

### 4. Tạo Cube
```javascript
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
```
- **Geometry**: Hình dạng (1x1x1 cube)
- **Material**: Chất liệu, màu sắc
- **Mesh**: Geometry + Material
- `scene.add()`: Thêm vào scene

### 5. Animation Loop
```javascript
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();
```
- Chạy 60 lần/giây
- Xoay cube mỗi frame
- Render scene lên canvas

## 🎨 Kết quả mong đợi

Bạn sẽ thấy:
- ✅ Một cube màu xanh lá
- ✅ Cube đang xoay chậm
- ✅ Nền màu xám đậm
- ✅ Info box góc trên bên trái

## 💡 Thử nghiệm

Hãy thử thay đổi các giá trị này trong `main.js`:

1. **Màu cube** (dòng 63):
```javascript
color: 0xff0000  // Đỏ
color: 0x0000ff  // Xanh dương
color: 0xffff00  // Vàng
```

2. **Kích thước cube** (dòng 58):
```javascript
new THREE.BoxGeometry(2, 0.5, 1)  // Rộng, thấp, sâu
```

3. **Tốc độ xoay** (dòng 82-83):
```javascript
cube.rotation.x += 0.05;  // Xoay nhanh hơn
cube.rotation.y += 0.02;  // Xoay chậm hơn
```

4. **Vị trí camera** (dòng 42):
```javascript
camera.position.z = 3;   // Gần hơn
camera.position.z = 10;  // Xa hơn
camera.position.y = 2;   // Nhìn từ trên xuống
```

## ❓ Câu hỏi thường gặp

**Q: Tại sao không thấy gì trên màn hình?**
- Kiểm tra console (F12) có lỗi không
- Đảm bảo chạy qua local server (không mở file trực tiếp)
- Kiểm tra camera.position.z > 0

**Q: Tại sao cube không xoay?**
- Kiểm tra animation loop đã được gọi chưa
- Kiểm tra `requestAnimationFrame(animate)` có trong function

**Q: Màu hex 0x00ff00 là gì?**
- Hex color: 0xRRGGBB
- 0x00ff00 = Red:00, Green:ff, Blue:00 = Xanh lá

## ➡️ Bước tiếp theo

Sau khi hiểu lesson này, chuyển sang:
- **Lesson 2**: Thử nghiệm với nhiều geometries khác nhau
