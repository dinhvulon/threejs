// Import Three.js
import * as THREE from 'three';

// ============================================
// BƯỚC 1: TẠO SCENE (Sân khấu)
// ============================================
// Scene là container chứa tất cả objects, lights, cameras
const scene = new THREE.Scene();

// Đặt màu nền cho scene (màu xám nhạt)
scene.background = new THREE.Color(0x222222);

console.log('✅ Scene đã được tạo');


// ============================================
// BƯỚC 2: TẠO CAMERA (Máy quay)
// ============================================
// PerspectiveCamera tạo hiệu ứng phối cảnh (giống mắt người)
// Tham số:
// - 75: Field of View (góc nhìn) - càng lớn càng nhìn rộng
// - window.innerWidth / window.innerHeight: Tỷ lệ khung hình
// - 0.1: Near clipping plane - vật gần hơn sẽ không hiển thị
// - 1000: Far clipping plane - vật xa hơn sẽ không hiển thị
const camera = new THREE.PerspectiveCamera(
    75,                                      // FOV
    window.innerWidth / window.innerHeight,  // Aspect ratio
    0.1,                                     // Near
    1000                                     // Far
);

// Di chuyển camera ra xa để nhìn thấy objects
// Mặc định camera ở vị trí (0, 0, 0)
camera.position.z = 5;  // Di chuyển camera ra phía trước (về phía người xem)

console.log('✅ Camera đã được tạo tại vị trí:', camera.position);


// ============================================
// BƯỚC 3: TẠO RENDERER (Máy chiếu)
// ============================================
// WebGLRenderer vẽ scene lên canvas bằng WebGL
const renderer = new THREE.WebGLRenderer({
    antialias: true  // Làm mượt các cạnh (chống răng cưa)
});

// Set kích thước canvas = kích thước cửa sổ
renderer.setSize(window.innerWidth, window.innerHeight);

// Set pixel ratio để hiển thị đẹp trên màn hình retina
renderer.setPixelRatio(window.devicePixelRatio);

// Thêm canvas vào trang web
document.body.appendChild(renderer.domElement);

console.log('✅ Renderer đã được tạo');


// ============================================
// BƯỚC 4: TẠO OBJECT 3D (Cube)
// ============================================
// Geometry = hình dạng (shape)
// BoxGeometry tạo hình hộp
// Tham số: width (rộng), height (cao), depth (sâu)
const geometry = new THREE.BoxGeometry(1, 1, 1);

// Material = chất liệu, màu sắc
// MeshBasicMaterial = material đơn giản, không cần ánh sáng
const material = new THREE.MeshBasicMaterial({ 
    color: 0x00ff00  // Màu xanh lá (hex color)
});

// Mesh = Geometry + Material
// Mesh là object 3D thực sự mà chúng ta nhìn thấy
const cube = new THREE.Mesh(geometry, material);

// Thêm cube vào scene
scene.add(cube);

console.log('✅ Cube đã được thêm vào scene');


// ============================================
// BƯỚC 5: ANIMATION LOOP (Vòng lặp hoạt ảnh)
// ============================================
// Function này sẽ chạy liên tục (60 lần/giây)
function animate() {
    // requestAnimationFrame gọi function này lại sau mỗi frame
    requestAnimationFrame(animate);

    // Xoay cube một chút mỗi frame
    // rotation.x = xoay quanh trục X (ngang)
    // rotation.y = xoay quanh trục Y (dọc)
    cube.rotation.x += 0.01;  // Xoay chậm
    cube.rotation.y += 0.01;

    // Render scene với camera
    // Đây là bước vẽ scene lên canvas
    renderer.render(scene, camera);
}

// Bắt đầu animation loop
animate();

console.log('✅ Animation loop đã bắt đầu');


// ============================================
// BƯỚC 6: XỬ LÝ RESIZE CỬA SỔ
// ============================================
// Khi user thay đổi kích thước cửa sổ, cập nhật camera và renderer
window.addEventListener('resize', () => {
    // Cập nhật aspect ratio của camera
    camera.aspect = window.innerWidth / window.innerHeight;
    
    // Phải gọi updateProjectionMatrix sau khi thay đổi camera properties
    camera.updateProjectionMatrix();
    
    // Cập nhật kích thước renderer
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    console.log('📐 Đã resize canvas');
});


// ============================================
// 🎉 HOÀN THÀNH!
// ============================================
console.log('🎉 Scene 3D đầu tiên của bạn đã sẵn sàng!');
console.log('💡 Mở Developer Console (F12) để xem các log messages');
