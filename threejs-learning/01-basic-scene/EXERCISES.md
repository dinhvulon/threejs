# 🏋️ Bài Tập Thực Hành - Lesson 1

## Bài tập 1: Tạo Scene Đầu Tiên ⭐

**Mục tiêu:** Tự tay code lại scene cơ bản từ đầu

**Yêu cầu:**
- [ ] Tạo file `exercise-1.html`
- [ ] Tạo scene với background màu xanh dương nhạt (0x87CEEB)
- [ ] Tạo camera với FOV = 60
- [ ] Tạo một cube màu đỏ (0xff0000)
- [ ] Làm cube xoay quanh trục Y (không xoay trục X)
- [ ] Xử lý resize cửa sổ

**Gợi ý:**
- Copy structure từ `index.html`
- Thay đổi các giá trị theo yêu cầu
- Chỉ xoay `cube.rotation.y`, không xoay `.x`

<details>
<summary>👉 Xem Solution</summary>

```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercise 1</title>
    <style>
        body { margin: 0; overflow: hidden; }
        canvas { display: block; }
    </style>
</head>
<body>
    <script type="importmap">
        {
            "imports": {
                "three": "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js"
            }
        }
    </script>
    <script type="module">
        import * as THREE from 'three';

        // Scene với background xanh dương nhạt
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x87CEEB);

        // Camera với FOV = 60
        const camera = new THREE.PerspectiveCamera(
            60,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 5;

        // Renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        // Cube màu đỏ
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        // Animation - chỉ xoay trục Y
        function animate() {
            requestAnimationFrame(animate);
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        }
        animate();

        // Resize
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
    </script>
</body>
</html>
```

</details>

---

## Bài tập 2: Thử Nghiệm Với Vị Trí ⭐⭐

**Mục tiêu:** Hiểu cách di chuyển objects trong không gian 3D

**Yêu cầu:**
- [ ] Tạo file `exercise-2.html`
- [ ] Tạo 3 cubes với màu khác nhau
- [ ] Cube 1: Vị trí (-2, 0, 0) - màu đỏ
- [ ] Cube 2: Vị trí (0, 0, 0) - màu xanh lá
- [ ] Cube 3: Vị trí (2, 0, 0) - màu xanh dương
- [ ] Tất cả đều xoay với tốc độ giống nhau

**Gợi ý:**
- Sử dụng `cube.position.set(x, y, z)`
- Trục X: trái (-) / phải (+)
- Trục Y: dưới (-) / trên (+)
- Trục Z: xa (-) / gần (+)

<details>
<summary>👉 Xem Solution</summary>

```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Exercise 2</title>
    <style>
        body { margin: 0; overflow: hidden; }
    </style>
</head>
<body>
    <script type="importmap">
        {
            "imports": {
                "three": "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js"
            }
        }
    </script>
    <script type="module">
        import * as THREE from 'three';

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x222222);

        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        // Cube 1 - Đỏ - Bên trái
        const geo1 = new THREE.BoxGeometry(1, 1, 1);
        const mat1 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        const cube1 = new THREE.Mesh(geo1, mat1);
        cube1.position.set(-2, 0, 0);
        scene.add(cube1);

        // Cube 2 - Xanh lá - Giữa
        const geo2 = new THREE.BoxGeometry(1, 1, 1);
        const mat2 = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube2 = new THREE.Mesh(geo2, mat2);
        cube2.position.set(0, 0, 0);
        scene.add(cube2);

        // Cube 3 - Xanh dương - Bên phải
        const geo3 = new THREE.BoxGeometry(1, 1, 1);
        const mat3 = new THREE.MeshBasicMaterial({ color: 0x0000ff });
        const cube3 = new THREE.Mesh(geo3, mat3);
        cube3.position.set(2, 0, 0);
        scene.add(cube3);

        // Animation
        function animate() {
            requestAnimationFrame(animate);
            
            cube1.rotation.x += 0.01;
            cube1.rotation.y += 0.01;
            
            cube2.rotation.x += 0.01;
            cube2.rotation.y += 0.01;
            
            cube3.rotation.x += 0.01;
            cube3.rotation.y += 0.01;
            
            renderer.render(scene, camera);
        }
        animate();

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
    </script>
</body>
</html>
```

</details>

---

## Bài tập 3: Creative Challenge ⭐⭐⭐

**Mục tiêu:** Sáng tạo scene của riêng bạn!

**Yêu cầu:**
- [ ] Tạo file `exercise-3.html`
- [ ] Tạo ít nhất 5 cubes
- [ ] Mỗi cube có màu, kích thước, vị trí khác nhau
- [ ] Mỗi cube xoay với tốc độ khác nhau
- [ ] Thêm hiệu ứng: làm cubes di chuyển lên xuống (sử dụng Math.sin)
- [ ] Bonus: Thêm text hiển thị số lượng cubes

**Gợi ý:**
- Sử dụng loop để tạo nhiều cubes
- `Math.sin(Date.now() * 0.001)` cho chuyển động mượt
- `cube.scale.set(x, y, z)` để thay đổi kích thước
- Sử dụng `Math.random()` cho giá trị ngẫu nhiên

<details>
<summary>👉 Xem Solution</summary>

```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Exercise 3 - Creative</title>
    <style>
        body { margin: 0; overflow: hidden; }
        #count {
            position: absolute;
            top: 20px;
            left: 20px;
            color: white;
            font-family: Arial;
            font-size: 24px;
            background: rgba(0,0,0,0.5);
            padding: 10px 20px;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div id="count">Cubes: 0</div>
    
    <script type="importmap">
        {
            "imports": {
                "three": "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js"
            }
        }
    </script>
    <script type="module">
        import * as THREE from 'three';

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x0f0f1e);

        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 10;
        camera.position.y = 3;

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        // Tạo nhiều cubes
        const cubes = [];
        const numCubes = 8;

        for (let i = 0; i < numCubes; i++) {
            const geometry = new THREE.BoxGeometry(1, 1, 1);
            
            // Màu ngẫu nhiên
            const color = new THREE.Color(
                Math.random(),
                Math.random(),
                Math.random()
            );
            const material = new THREE.MeshBasicMaterial({ color });
            
            const cube = new THREE.Mesh(geometry, material);
            
            // Vị trí ngẫu nhiên
            cube.position.set(
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 5,
                (Math.random() - 0.5) * 5
            );
            
            // Kích thước ngẫu nhiên
            const scale = 0.5 + Math.random() * 1.5;
            cube.scale.set(scale, scale, scale);
            
            // Lưu tốc độ xoay riêng
            cube.userData.rotationSpeed = {
                x: Math.random() * 0.02,
                y: Math.random() * 0.02
            };
            
            // Lưu offset cho animation
            cube.userData.offset = i * 0.5;
            
            scene.add(cube);
            cubes.push(cube);
        }

        // Update counter
        document.getElementById('count').textContent = `Cubes: ${numCubes}`;

        // Animation
        function animate() {
            requestAnimationFrame(animate);

            cubes.forEach((cube) => {
                // Xoay với tốc độ riêng
                cube.rotation.x += cube.userData.rotationSpeed.x;
                cube.rotation.y += cube.userData.rotationSpeed.y;
                
                // Di chuyển lên xuống
                const time = Date.now() * 0.001;
                cube.position.y += Math.sin(time + cube.userData.offset) * 0.01;
            });

            renderer.render(scene, camera);
        }
        animate();

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
    </script>
</body>
</html>
```

</details>

---

## 📊 Checklist Hoàn Thành

Sau khi làm xong tất cả bài tập, bạn nên:

- [ ] Hiểu 3 thành phần cốt lõi: Scene, Camera, Renderer
- [ ] Biết cách tạo và thêm objects vào scene
- [ ] Hiểu hệ tọa độ 3D (X, Y, Z)
- [ ] Biết cách làm objects xoay
- [ ] Biết cách thay đổi màu sắc, vị trí, kích thước
- [ ] Hiểu animation loop hoạt động như thế nào
- [ ] Biết xử lý resize cửa sổ

## ✅ Khi nào chuyển sang Lesson 2?

Bạn đã sẵn sàng cho Lesson 2 khi:
- ✅ Làm được ít nhất 2/3 bài tập
- ✅ Hiểu code mình đang viết (không chỉ copy-paste)
- ✅ Có thể tự tạo scene với nhiều cubes
- ✅ Biết debug khi có lỗi (check console)

## 💬 Gặp khó khăn?

Nếu bạn stuck, hãy:
1. Check console (F12) xem có lỗi gì
2. So sánh code của bạn với solution
3. Đọc lại phần giải thích trong README.md
4. Hỏi tôi bất cứ lúc nào!

---

**Chúc bạn làm bài tập vui vẻ! 🎉**
