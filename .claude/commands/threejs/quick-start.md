---
description: 🚀 Quick start a Three.js project with boilerplate code
argument-hint: [project-name] [template-type]
---

# Three.js Quick Start

Tạo nhanh một Three.js project với boilerplate code sẵn sàng!

## Project Request

<project-info>$ARGUMENTS</project-info>

---

## Workflow

### 1. Parse User Request

**Xác định:**
- Project name (mặc định: `threejs-project`)
- Template type:
  - `basic` - Basic scene với cube
  - `model-viewer` - GLTF model viewer
  - `interactive` - Interactive scene với raycasting
  - `game` - Simple game template với controls
  - `vr` - VR/XR template
  - `custom` - User tự mô tả

### 2. Setup Project Structure

**Activate threejs skill** và tạo structure:

```
[project-name]/
├── index.html
├── style.css
├── src/
│   ├── main.js
│   ├── scene.js
│   ├── camera.js
│   ├── renderer.js
│   ├── lights.js
│   └── objects.js
├── assets/
│   ├── models/
│   ├── textures/
│   └── fonts/
├── package.json
├── vite.config.js (if using bundler)
└── README.md
```

### 3. Generate Template Code

**Based on template type, generate appropriate code:**

#### Template: Basic
- Simple rotating cube
- Basic lighting
- OrbitControls
- Responsive canvas

#### Template: Model Viewer
- GLTF loader setup
- Drag & drop functionality
- Environment map
- UI controls for model

#### Template: Interactive
- Raycasting
- Mouse/touch interaction
- Object picking
- Transform controls

#### Template: Game
- Keyboard controls
- Player movement
- Camera follow
- Basic physics

#### Template: VR
- WebXR setup
- VR controllers
- Teleportation
- UI in 3D space

### 4. Create Package Configuration

**Generate package.json với:**
- Three.js dependency (latest version)
- Dev server (Vite hoặc basic http-server)
- Build scripts
- Dev dependencies nếu cần

**Example package.json:**
```json
{
  "name": "project-name",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "three": "^0.160.0"
  },
  "devDependencies": {
    "vite": "^5.0.0"
  }
}
```

### 5. Create HTML Entry Point

**Generate index.html với:**
- Proper meta tags
- Canvas element
- Module script imports
- Basic styling

### 6. Generate Modular JavaScript

**Create well-structured JS modules:**

**src/main.js** - Entry point:
```javascript
// Import modules
import { createScene } from './scene.js';
import { createCamera } from './camera.js';
import { createRenderer } from './renderer.js';
import { setupLights } from './lights.js';
import { createObjects } from './objects.js';

// Initialize
const scene = createScene();
const camera = createCamera();
const renderer = createRenderer();

// Setup scene
setupLights(scene);
const objects = createObjects(scene);

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  
  // Update logic here
  
  renderer.render(scene, camera);
}

// Handle resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Start
animate();
```

**IMPORTANT:**
- Mỗi module có responsibility rõ ràng
- Clean, maintainable code structure
- Comments bằng tiếng Việt
- Best practices

### 7. Add README Documentation

**Create README.md với:**

```markdown
# [Project Name]

[Mô tả project]

## Setup

\`\`\`bash
npm install
\`\`\`

## Development

\`\`\`bash
npm run dev
\`\`\`

Open http://localhost:5173

## Build

\`\`\`bash
npm run build
\`\`\`

## Structure

- `src/main.js` - Entry point
- `src/scene.js` - Scene setup
- `src/camera.js` - Camera configuration
- `src/renderer.js` - Renderer setup
- `src/lights.js` - Lighting
- `src/objects.js` - 3D objects

## Resources

- [Three.js Docs](https://threejs.org/docs/)
- [Three.js Examples](https://threejs.org/examples/)
```

### 8. Install Dependencies & Run

**Hướng dẫn user:**

```bash
cd [project-name]
npm install
npm run dev
```

**Verify everything works:**
- Check console for errors
- Confirm scene renders correctly
- Test responsive behavior

### 9. Next Steps Suggestions

**Suggest to user:**
- Customize the scene
- Add more objects
- Experiment with materials
- Try different lights
- Add interactivity
- Load 3D models

**Provide links to:**
- Relevant skill references
- Three.js examples
- Learning resources

---

## Template Specifications

### Basic Template
- ✅ Scene với background color
- ✅ PerspectiveCamera
- ✅ WebGLRenderer với antialiasing
- ✅ DirectionalLight + AmbientLight
- ✅ Rotating cube/mesh
- ✅ OrbitControls
- ✅ Window resize handling
- ✅ Animation loop

### Model Viewer Template
- ✅ GLTFLoader setup
- ✅ Loading manager với progress
- ✅ Environment map (HDR)
- ✅ OrbitControls với auto-rotate
- ✅ Stats panel
- ✅ UI controls (GUI)
- ✅ Drag & drop support

### Interactive Template
- ✅ Raycaster
- ✅ Mouse/touch events
- ✅ Object selection
- ✅ Hover effects
- ✅ Click handlers
- ✅ TransformControls (optional)

### Game Template
- ✅ Keyboard input handler
- ✅ Player object
- ✅ Camera follow system
- ✅ Collision detection (basic)
- ✅ Ground plane
- ✅ Simple physics

### VR Template
- ✅ WebXR setup
- ✅ VR button
- ✅ VR controllers
- ✅ Controller models
- ✅ Teleportation
- ✅ VR-compatible UI

---

## Quality Checklist

Before finishing, verify:

- [ ] All files created successfully
- [ ] Code follows best practices
- [ ] Proper error handling
- [ ] Comments bằng tiếng Việt
- [ ] No console errors
- [ ] Scene renders correctly
- [ ] Responsive design works
- [ ] Package.json is valid
- [ ] README is clear
- [ ] Dependencies are correct

---

## Tips

**Performance:**
- Enable renderer.shadowMap nếu dùng shadows
- Set appropriate near/far planes
- Dispose geometries/materials khi không dùng

**Development:**
- Use Vite hoặc modern bundler
- Enable HMR cho faster development
- Add linting (optional)

**Code Quality:**
- Separate concerns vào modules
- Use ES6 features
- Clear naming conventions
- Proper error handling

**User Experience:**
- Loading indicators
- Fallback for WebGL errors
- Mobile-friendly controls
- Clear instructions

---

**LƯU Ý:**
- Always activate `threejs` skill
- Use latest Three.js version
- Test on multiple browsers
- Provide clear next steps
- Encourage exploration! 🚀
