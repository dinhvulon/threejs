---
description: 📖 Three.js help - quick reference and problem solving
argument-hint: [topic|error-message]
---

# Three.js Help & Troubleshooting

Giúp bạn giải quyết vấn đề Three.js nhanh chóng!

## Issue/Question

<user-issue>$ARGUMENTS</user-issue>

---

## Workflow

### 1. Identify Issue Type

**Activate threejs skill** và xác định loại vấn đề:

**Category A: Concept Questions**
- "How to [do something]?"
- "What is [concept]?"
- "When to use [feature]?"

**Category B: Technical Errors**
- Console errors
- Rendering issues
- Performance problems
- Loading failures

**Category C: Best Practices**
- Code structure
- Optimization
- Patterns and anti-patterns

**Category D: Quick Reference**
- API lookup
- Parameter details
- Code snippets

### 2. Load Relevant References

**Based on issue type, load appropriate references:**

**Scene/Rendering Issues:**
- `references/01-getting-started.md`

**Model Loading Problems:**
- `references/02-loaders.md`
- `references/15-specialized-loaders.md`

**Texture Issues:**
- `references/03-textures.md`

**Camera Problems:**
- `references/04-cameras.md`

**Lighting Issues:**
- `references/05-lights.md`

**Animation Problems:**
- `references/06-animations.md`

**Math/Transformation Issues:**
- `references/07-math.md`

**Interaction Problems:**
- `references/08-interaction.md`

**Performance Issues:**
- `references/12-performance.md`

**Material/Shader Issues:**
- `references/11-materials-advanced.md`
- `references/13-node-materials.md`

**VR/Physics Issues:**
- `references/14-physics-vr.md`

**WebGPU Issues:**
- `references/16-webgpu.md`

### 3. Analyze the Problem

**If error message provided:**
- Explain what the error means
- Common causes
- Step-by-step solution

**If concept question:**
- Explain concept clearly (Vietnamese)
- Provide code example
- Explain use cases
- Link to relevant resources

**If best practice question:**
- Explain current approach issues
- Suggest better alternatives
- Show code comparison
- Explain trade-offs

### 4. Provide Solution

**Solution Format:**

```markdown
## 🔍 Phân tích vấn đề

[Giải thích vấn đề là gì]

## ✅ Giải pháp

[Giải pháp chính]

### Code Example

[Code minh họa]

## 💡 Giải thích

[Tại sao solution này work]

## ⚠️ Lưu ý

[Các lưu ý quan trọng]

## 🔗 Resources

[Links to docs, examples]
```

### 5. Common Issues & Quick Fixes

#### Issue: "Scene is black/nothing renders"

**Possible causes:**
1. No lights (if using lit materials)
2. Camera position inside objects
3. Objects outside camera frustum
4. Materials need lights

**Quick fix:**
```javascript
// Add lights
scene.add(new THREE.AmbientLight(0x404040));
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);

// Check camera position
camera.position.z = 5;
camera.lookAt(0, 0, 0);
```

#### Issue: "Model doesn't load"

**Possible causes:**
1. Wrong path
2. CORS issues
3. Loader not imported
4. File format not supported

**Quick fix:**
```javascript
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const loader = new GLTFLoader();
loader.load(
  'path/to/model.gltf',
  (gltf) => {
    scene.add(gltf.scene);
  },
  (progress) => {
    console.log('Loading:', (progress.loaded / progress.total * 100) + '%');
  },
  (error) => {
    console.error('Error loading model:', error);
  }
);
```

#### Issue: "Poor performance/low FPS"

**Quick fixes:**
1. Reduce polygon count
2. Use instancing for repeated objects
3. Implement LOD
4. Enable frustum culling
5. Reduce shadow map size
6. Use texture compression

```javascript
// Example: Instancing
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial();
const mesh = new THREE.InstancedMesh(geometry, material, 1000);

for (let i = 0; i < 1000; i++) {
  const matrix = new THREE.Matrix4();
  matrix.setPosition(
    Math.random() * 100 - 50,
    Math.random() * 100 - 50,
    Math.random() * 100 - 50
  );
  mesh.setMatrixAt(i, matrix);
}

scene.add(mesh);
```

#### Issue: "Shadows not working"

**Quick fix:**
```javascript
// Enable shadows on renderer
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// Light casts shadow
light.castShadow = true;
light.shadow.mapSize.width = 1024;
light.shadow.mapSize.height = 1024;

// Object casts shadow
object.castShadow = true;

// Ground receives shadow
ground.receiveShadow = true;
```

#### Issue: "Textures appear black/wrong"

**Quick fix:**
```javascript
// Check texture loading
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load(
  'path/to/texture.jpg',
  () => {
    console.log('Texture loaded');
  },
  undefined,
  (error) => {
    console.error('Texture error:', error);
  }
);

// Set color space correctly
texture.colorSpace = THREE.SRGBColorSpace;

// Apply to material
const material = new THREE.MeshStandardMaterial({
  map: texture
});
```

#### Issue: "Objects not clickable/raycasting not working"

**Quick fix:**
```javascript
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

window.addEventListener('click', (event) => {
  // Calculate mouse position in normalized device coordinates
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  // Update raycaster
  raycaster.setFromCamera(mouse, camera);

  // Calculate intersects
  const intersects = raycaster.intersectObjects(scene.children, true);

  if (intersects.length > 0) {
    console.log('Clicked:', intersects[0].object);
  }
});
```

### 6. Quick Reference Lookup

**If user asks for quick reference:**

Provide concise API reference:

```markdown
## [Feature] - Quick Reference

### Constructor
[Constructor syntax]

### Key Properties
- property1: [description]
- property2: [description]

### Key Methods
- method1(): [description]
- method2(): [description]

### Example
[Minimal working example]

### See Also
[Related features]
```

### 7. Additional Resources

**Always provide:**
- Link to official docs
- Link to relevant examples
- Community resources if needed
- Suggest related topics to explore

---

## Common Error Messages

### "THREE.WebGLRenderer: Context Lost"
**Cause:** GPU crashed or too many WebGL contexts
**Fix:** Dispose old contexts, reduce memory usage

### "THREE.BufferGeometry: Index out of range"
**Cause:** Invalid geometry indices
**Fix:** Check geometry creation, use BufferGeometryUtils

### "THREE.Material: materialName is not a constructor"
**Cause:** Wrong import or typo
**Fix:** Check import statement and material name

### "Cannot read property 'render' of undefined"
**Cause:** Renderer not initialized
**Fix:** Check renderer creation and initialization order

### "Cross-origin image load denied"
**Cause:** CORS policy blocking texture load
**Fix:** Use local server or configure CORS headers

---

## Best Practices Quick Reference

**Performance:**
- Reuse geometries and materials
- Use instancing for repeated objects
- Implement LOD for distant objects
- Dispose unused resources
- Use texture atlases

**Code Structure:**
- Separate concerns into modules
- Use classes for complex objects
- Implement cleanup methods
- Handle window resize
- Use requestAnimationFrame

**Rendering:**
- Set proper camera near/far planes
- Enable renderer.shadowMap only if needed
- Use appropriate material types
- Set correct color spaces
- Enable antialiasing

**Memory Management:**
- Dispose geometries: `geometry.dispose()`
- Dispose materials: `material.dispose()`
- Dispose textures: `texture.dispose()`
- Remove event listeners
- Clear render targets

---

## Response Guidelines

1. **Be Specific:** Provide exact code, not pseudocode
2. **Explain Why:** Don't just show solution, explain it
3. **Tiếng Việt:** Use Vietnamese for explanations
4. **Test First:** Verify solution works
5. **Context Matters:** Consider user's level
6. **Multiple Solutions:** Show alternatives if available
7. **Prevent Future Issues:** Point out related problems

---

**LƯU Ý QUAN TRỌNG:**
- Always activate `threejs` skill first
- Load relevant reference materials
- Provide working, tested solutions
- Explain clearly in Vietnamese
- Link to official documentation
- Be patient and supportive! 🤝
