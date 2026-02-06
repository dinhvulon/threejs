# Three.js Skill - Available Commands

Quick reference for Three.js commands in this project.

## 📋 Commands Overview

| Command | Purpose | Usage |
|---------|---------|-------|
| `/learn-threejs` | Interactive learning guide | `/learn-threejs [level\|topic]` |
| `/threejs/quick-start` | Create project with boilerplate | `/threejs/quick-start [name] [template]` |
| `/threejs/help` | Troubleshooting & reference | `/threejs/help [issue\|topic]` |

## 🎯 Quick Start Guide

### Absolute Beginner
```bash
# Start learning from scratch
/learn-threejs start

# Create first project
/threejs/quick-start my-first-3d basic

# Get help when stuck
/threejs/help [your issue]
```

### Already Know Basics
```bash
# Learn specific topic
/learn-threejs animations

# Create project with template
/threejs/quick-start demo interactive

# Quick API reference
/threejs/help raycasting
```

## 📚 Learning Levels

**Level 1:** Getting Started
- Scene, Camera, Renderer
- Basic Geometries & Materials
- Lights & Animation Loop

**Level 2:** Common Tasks
- Asset Loading (GLTF, FBX)
- Textures & Mapping
- Cameras & Controls
- Lighting & Shadows
- Animations

**Level 3:** Interactive & Effects
- Raycasting & Interaction
- Post-Processing
- Advanced Controls

**Level 4:** Advanced Rendering
- PBR Materials & Custom Shaders
- Performance Optimization
- Node Materials (TSL)

**Level 5:** Specialized
- Physics Engines
- VR/XR
- WebGPU

## 🛠️ Available Templates

| Template | Description | Best For |
|----------|-------------|----------|
| `basic` | Simple rotating cube scene | Learning, prototyping |
| `model-viewer` | GLTF loader with controls | Portfolios, showcases |
| `interactive` | Raycasting & interaction | Product configs, games |
| `game` | Keyboard controls & physics | Simple 3D games |
| `vr` | WebXR setup | VR/AR experiences |
| `custom` | Describe your needs | Specific requirements |

## 💡 Common Use Cases

### "Tôi muốn học Three.js từ đầu"
```bash
/learn-threejs start
```

### "Tôi cần tạo model viewer cho portfolio"
```bash
/threejs/quick-start portfolio-viewer model-viewer
```

### "Scene của tôi hiển thị màu đen"
```bash
/threejs/help scene is black
```

### "Làm sao để load GLTF model?"
```bash
/learn-threejs loaders
# hoặc
/threejs/help gltf loading
```

### "Performance của tôi quá chậm"
```bash
/learn-threejs performance
# hoặc
/threejs/help poor performance
```

### "Làm sao để click vào objects?"
```bash
/learn-threejs interaction
# hoặc
/threejs/help raycasting
```

## 🔗 Related Files

- **Skill Definition**: `.claude/skills/threejs/SKILL.md`
- **Commands Docs**: `.claude/commands/threejs/README.md`
- **References**: `.claude/skills/threejs/references/*.md`

## 📖 Full Documentation

For detailed usage instructions, see:
```
.claude/commands/threejs/README.md
```

---

**Happy coding with Three.js! 🎨✨**
