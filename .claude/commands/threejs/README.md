# Three.js Commands - Hướng dẫn sử dụng

Bộ commands để học và phát triển Three.js với Claude! 🎨✨

## 📋 Danh sách Commands

### 1. `/learn-threejs` - Học Three.js từ đầu

**Mục đích:** Hướng dẫn interactive học Three.js cho người mới, từ cơ bản đến nâng cao

**Cách dùng:**
```
/learn-threejs start
/learn-threejs level-1
/learn-threejs cameras
/learn-threejs animations
/learn-threejs shaders
```

**Ví dụ:**
- `/learn-threejs` - Bắt đầu từ đầu, Claude sẽ hỏi level của bạn
- `/learn-threejs level-2` - Học Level 2 (Asset Loading, Textures, Cameras, Lights)
- `/learn-threejs raycasting` - Học về raycasting và interaction
- `/learn-threejs performance` - Học optimization techniques

**Tính năng:**
- ✅ Giải thích bằng tiếng Việt
- ✅ Code examples với comments chi tiết
- ✅ Bài tập thực hành từng bước
- ✅ Mini projects sau mỗi level
- ✅ Track progress
- ✅ Interactive Q&A

**Khi nào dùng:**
- Bạn mới bắt đầu với Three.js
- Muốn học có hệ thống từ cơ bản đến nâng cao
- Cần bài tập thực hành
- Muốn build portfolio projects

---

### 2. `/threejs/quick-start` - Tạo project nhanh

**Mục đích:** Khởi tạo Three.js project với boilerplate code sẵn sàng

**Cách dùng:**
```
/threejs/quick-start [project-name] [template]
```

**Templates có sẵn:**
- `basic` - Scene cơ bản với cube quay
- `model-viewer` - GLTF model viewer
- `interactive` - Scene có raycasting và interaction
- `game` - Game template với keyboard controls
- `vr` - VR/XR template
- `custom` - Mô tả theo ý bạn

**Ví dụ:**
- `/threejs/quick-start my-3d-app basic` - Tạo basic project
- `/threejs/quick-start portfolio model-viewer` - Tạo model viewer
- `/threejs/quick-start game interactive` - Tạo interactive game
- `/threejs/quick-start vr-demo vr` - Tạo VR experience

**Tính năng:**
- ✅ Project structure tối ưu
- ✅ Modular code (scene, camera, renderer tách riêng)
- ✅ Package.json với scripts sẵn
- ✅ Vite setup cho dev server
- ✅ README với hướng dẫn
- ✅ Best practices built-in

**Khi nào dùng:**
- Bắt đầu project mới
- Cần boilerplate code nhanh
- Muốn structure tốt từ đầu
- Prototype ý tưởng

---

### 3. `/threejs/help` - Giải quyết vấn đề

**Mục đích:** Troubleshooting, quick reference, và giải đáp thắc mắc

**Cách dùng:**
```
/threejs/help [topic|error|question]
```

**Ví dụ:**
- `/threejs/help scene is black` - Fix scene không hiển thị
- `/threejs/help model not loading` - Debug model loading issues
- `/threejs/help poor performance` - Tối ưu performance
- `/threejs/help shadows` - Quick reference về shadows
- `/threejs/help raycasting not working` - Fix interaction issues
- `/threejs/help WebGLRenderer: Context Lost` - Giải thích error

**Tính năng:**
- ✅ Phân tích vấn đề
- ✅ Solution với code examples
- ✅ Giải thích tại sao
- ✅ Common issues & quick fixes
- ✅ Best practices
- ✅ Links to resources

**Khi nào dùng:**
- Gặp lỗi không hiểu
- Scene không render đúng
- Performance chậm
- Cần quick reference API
- Không biết cách implement feature
- Muốn tìm best practices

---

## 🎯 Workflow Học Three.js

### Người mới hoàn toàn:

**Bước 1:** Bắt đầu học
```
/learn-threejs start
```
Claude sẽ hỏi level của bạn và bắt đầu từ Level 1

**Bước 2:** Thực hành với project
```
/threejs/quick-start my-first-3d basic
```
Tạo project để thực hành những gì học được

**Bước 3:** Gặp vấn đề? Hỏi ngay!
```
/threejs/help [vấn đề của bạn]
```

### Đã biết cơ bản, muốn học thêm:

**Chọn topic cụ thể:**
```
/learn-threejs animations
/learn-threejs post-processing
/learn-threejs custom-shaders
```

**Tạo project thực hành:**
```
/threejs/quick-start animation-demo interactive
```

### Đang làm project, cần giúp đỡ:

**Troubleshooting:**
```
/threejs/help [error message hoặc issue]
```

**Quick reference:**
```
/threejs/help [API hoặc feature name]
```

---

## 📚 Learning Path Đề xuất

### 🟢 Level 1: Getting Started (1-2 tuần)
**Mục tiêu:** Hiểu cơ bản về Three.js

**Học:**
```
/learn-threejs level-1
```

**Topics:**
- Scene, Camera, Renderer
- Basic Geometries
- Materials cơ bản
- Lights
- Animation loop

**Project:**
```
/threejs/quick-start solar-system basic
```
Tạo hệ mặt trời 3D đơn giản

---

### 🟡 Level 2: Common Tasks (2-3 tuần)
**Mục tiêu:** Load models, làm việc với textures, cameras, lights

**Học từng topic:**
```
/learn-threejs loaders
/learn-threejs textures
/learn-threejs cameras
/learn-threejs lights
/learn-threejs animations
```

**Project:**
```
/threejs/quick-start portfolio model-viewer
```
Tạo portfolio 3D với GLTF models

---

### 🟠 Level 3: Interactive & Effects (2-3 tuần)
**Mục tiêu:** Tạo interactive experiences, áp dụng effects

**Học:**
```
/learn-threejs interaction
/learn-threejs post-processing
/learn-threejs controls
```

**Project:**
```
/threejs/quick-start product-config interactive
```
Tạo product configurator (change colors, materials khi click)

---

### 🔴 Level 4: Advanced Rendering (3-4 tuần)
**Mục tiêu:** Custom shaders, optimize performance

**Học:**
```
/learn-threejs materials-advanced
/learn-threejs performance
/learn-threejs node-materials
```

**Project:**
```
/threejs/quick-start shader-gallery custom
```
Gallery showcase shader effects

---

### 🟣 Level 5: Specialized (4+ tuần)
**Mục tiêu:** Physics, VR/XR, WebGPU

**Học:**
```
/learn-threejs physics
/learn-threejs vr-xr
/learn-threejs webgpu
```

**Project:**
```
/threejs/quick-start vr-experience vr
```
VR experience với physics

---

## 💡 Tips & Best Practices

### Khi học:
- ✅ Code theo từng bước, đừng copy paste hết
- ✅ Thay đổi parameters để hiểu chúng làm gì
- ✅ Làm bài tập thực hành
- ✅ Build mini projects để practice
- ✅ Hỏi khi không hiểu, đừng guess

### Khi code:
- ✅ Tách code thành modules
- ✅ Dispose resources khi không dùng
- ✅ Comment code rõ ràng
- ✅ Test trên nhiều browsers
- ✅ Optimize cho mobile

### Khi debug:
- ✅ Check console errors
- ✅ Verify camera position
- ✅ Confirm lights are added
- ✅ Test với simple scene trước
- ✅ Dùng `/threejs/help` khi stuck

---

## 🔗 External Resources

**Official:**
- [Three.js Docs](https://threejs.org/docs/)
- [Three.js Examples](https://threejs.org/examples/)
- [Three.js Editor](https://threejs.org/editor/)

**Community:**
- [Three.js Discord](https://discord.gg/56GBJwAnUS)
- [Three.js Forum](https://discourse.threejs.org/)
- [Three.js GitHub](https://github.com/mrdoob/three.js/)

**Learning:**
- [Three.js Journey](https://threejs-journey.com/)
- [Three.js Fundamentals](https://threejsfundamentals.org/)
- [Discover Three.js](https://discoverthreejs.com/)

---

## 📝 Examples

### Example 1: Học từ đầu

```
User: /learn-threejs start

Claude: 
- Hỏi level hiện tại
- Bắt đầu từ Level 1
- Giải thích Scene, Camera, Renderer
- Tạo code example đầu tiên
- Đưa bài tập
```

### Example 2: Tạo project model viewer

```
User: /threejs/quick-start my-viewer model-viewer

Claude:
- Tạo project structure
- Setup GLTF loader
- Add OrbitControls
- Create UI
- Add drag & drop
- Generate README
- Hướng dẫn run project
```

### Example 3: Fix issue

```
User: /threejs/help model not loading, console shows CORS error

Claude:
- Giải thích CORS là gì
- Tại sao xảy ra issue này
- Solutions:
  1. Use local server
  2. Configure CORS headers
  3. Use different hosting
- Code examples
- Prevention tips
```

---

## 🎓 Kết luận

**Bộ commands này giúp bạn:**
- 📚 Học Three.js có hệ thống
- 🚀 Bắt đầu projects nhanh chóng
- 🔧 Giải quyết vấn đề hiệu quả
- 💪 Build portfolio projects
- 🎯 Đạt mục tiêu học tập

**Bắt đầu ngay:**
```
/learn-threejs start
```

**Chúc bạn học vui và thành công! 🎉**

---

*Created with ❤️ for Three.js learners*
