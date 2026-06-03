---
title: "Why Build a JAR? — A Deploy Story"
topic: "Java deployment workflow"
time_span: "single workflow explanation"
narrative_approach: "visual metaphor"
recommended_style: "ohmsha"
recommended_layout: "standard"
aspect_ratio: "3:4"
language: "en"
page_count: 8
generated: "2026-06-03 12:00"
---

# Why Build a JAR? — A Deploy Story
**Storyboard**

---

## Cover

**Filename**: 00-cover-baitpfv-jar-story.png  
**Core Message**: What if your app could tell its own deployment story?

**Visual Design**:
- Title: large manga bold text at top
- Central image: Nobita holding a laptop, confused expression, floating JAR crystal above his hand
- Doraemon peeking from behind with a "sparkle" gadget reveal effect
- Error monster lurking in background corner, shadowy
- Color contrast: bright JAR glow, dark error monster shadows
- Subtitle: "From IDE to Server"

**Visual Prompt**:
Ohmsha educational manga cover, manga art style, neutral educational tone, 3:4 portrait. A boy developer Nobita (10 years old, round glasses, black hair, yellow shirt, navy shorts, confused expression, holding laptop) stands center with glowing translucent JAR crystal floating above his hand. Behind him, Doraemon-like blue robot cat with white belly, 4D pocket, red nose, golden bell peeks with a confident smile, holding a sparking "Build-O-Matic" gadget. In the foreground shadows, a red tangled code-text Error Monster glowers. Clean manga line art, speed lines, bright colors, educational manga aesthetic. Title text: "Why Build a JAR?", subtitle "A Deploy Story".

---

## Page 1 / 8

**Filename**: 01-page-baitpfv-jar-story.png  
**Layout**: Standard (3 panels)  
**Narrative Layer**: Main narrative  
**Core Message**: Establish the problem: deploying raw source code breaks

### Panel Layout

**Panel Count**: 3  
**Layout Type**: Grid

#### Panel 1 (Top, 1/3 page)
**Scene**: IDE workspace, day
**Image Description**:
- Camera angle: Eye level, medium shot
- Characters: Nobita at desk, confident pose, laptop open showing Java code
- Environment: Clean desk, IDE window with syntax-highlighted Spring Boot code visible
- Lighting: Bright screen glow on face
- Color tone: Bright, optimistic

**Text Elements**:
- Speech bubble (oval): "My app is ready! I'll just copy the source to the server."
- Narrator box (rectangular): "Nobita thinks deploying source is simple..."

#### Panel 2 (Middle, 1/3 page)
**Scene**: Server terminal, red warning
**Image Description**:
- Camera angle: Close-up on error text scrolling
- Characters: None visible, system error output
- Environment: Terminal window, red error text
- Lighting: Red-tinted screen glow
- Color tone: Warning colors, alarming

**Text Elements**:
- Caption bar: "The server disagrees..."
- Terminal text (monospace): "bash: ./TaxController.java: Permission denied"

#### Panel 3 (Bottom, 1/3 page)
**Scene**: Nobita confused, Error Monster floating
**Image Description**:
- Camera angle: Low angle, character-centered
- Characters: Nobita, spiral eyes, confused; Error Monster (tangled code-text, red eyes) floating beside him
- Environment: Server room background, blinking server lights
- Lighting: Mixed, error glow casting red shadows
- Color tone: Confused, warning

**Text Elements**:
- Speech bubble (spiky oval): "??? The server just won't run my code!"
- Narrator box: "WHY DOES THIS HAPPEN?"

**Visual Prompt**:
Ohmsha educational manga page, manga art style, neutral tone, 3:4 portrait, 3-panel vertical layout. Panel 1: Young developer Nobita (round glasses, black hair, yellow shirt) sits at desk with laptop showing Java Spring Boot code, confident expression. Panel 2: Close-up terminal screen with red error text scrolling. Panel 3: Nobita with spiral eyes, confused pose, red Error Monster (tangled code-text creature with red eyes) floating beside him in server room. Clean manga lines, expressive character design, educational manga style.

---

## Page 2 / 8

**Filename**: 02-page-baitpfv-jar-story.png  
**Layout**: Standard (3 panels)  
**Narrative Layer**: Main narrative  
**Core Message**: Introduce the Build-O-Matic gadget, reveal JAR concept

### Panel Layout

**Panel Count**: 3

#### Panel 1 (Top, 1/3 page)
**Scene**: Doraemon dramatic reveal
**Image Description**:
- Camera angle: Low angle, dramatic reveal
- Characters: Doraemon, dramatic pose, holding Build-O-Matic gadget
- Environment: Sparkle effects, light burst
- Lighting: Bright glow from gadget
- Color tone: Dramatic reveal, golden highlights

**Text Elements**:
- Speech bubble (spiky, excitement): "BEHOLD! The Build-O-Matic!"
- Gadget label (bold): "BUILD-O-MATIC"

#### Panel 2 (Middle, 1/3 page)
**Scene**: Close-up JAR crystal with labeled compartments
**Image Description**:
- Camera angle: Extreme close-up on JAR
- Characters: None
- Environment: Transparent JAR container floating, contains labeled items: ".class files", "dependencies", "resources", "manifest"
- Lighting: Magical glow from inside JAR
- Color tone: Bright, magical

**Text Elements**:
- Diagram labels pointing inside JAR: ".class files", "libs/", "configs/", "MANIFEST.MF"
- Narrator box: "JAR = Java ARchive — a single file containing everything"

#### Panel 3 (Bottom, 1/3 page)
**Scene**: Nobita learning, Error Monster shrinking
**Image Description**:
- Camera angle: Eye level, education moment
- Characters: Nobita, "aha!" expression, eyes wide; Doraemon pointing at JAR; Error Monster in background, smaller, confused
- Environment: Clean white background, JAR visible in foreground
- Lighting: Soft, clear
- Color tone: Understanding, warm

**Text Elements**:
- Speech bubble (oval): "A JAR is like a packaged app!"
- Narrator box: "Source code → Build → JAR"

**Visual Prompt**:
Ohmsha educational manga, 3-panel vertical layout. Panel 1: Doraemon (blue robot cat, white belly, 4D pocket, golden bell) dramatic reveal with sparkle effects, holding a gadget labeled "BUILD-O-MATIC". Panel 2: Close-up transparent JAR crystal container showing labeled compartments: ".class files", "dependencies", "resources", "MANIFEST.MF", magical glow inside. Panel 3: Nobita (round glasses) with "aha!" expression, Doraemon pointing at JAR, tiny confused Error Monster in background. Clean manga art, neutral tone, educational manga style, 3:4 portrait.

---

## Page 3 / 8

**Filename**: 03-page-baitpfv-jar-story.png  
**Layout**: Standard (3 panels)  
**Narrative Layer**: Tutorial / Mirror  
**Core Message**: Walk through the IDE build process step by step

### Panel Layout

**Panel Count**: 3

#### Panel 1 (Top, 1/3 page)
**Scene**: IDE build button click
**Image Description**:
- Camera angle: Over-the-shoulder view
- Characters: Nobita hand on mouse, clicking "Build" in IDE
- Environment: IntelliJ IDEA / VS Code interface visible
- Lighting: Screen glow
- Color tone: Bright, technical

**Text Elements**:
- Speech bubble: "I'll just click Build in my IDE..."
- IDE label: "Maven: package"

#### Panel 2 (Middle, 1/3 page)
**Scene**: Sequential visual metaphors for build steps
**Image Description**:
- Camera angle: Centered compositional flow
- Characters: None
- Environment: Left-to-right flow of 4 distinct zones: Compile Machine → Resource Porter → Dependency Bundler → Manifest Writer
- Lighting: Bright, instructional
- Color tone: Structured, clear

**Text Elements**:
- Step labels: "1. Compile" → "2. Process resources" → "3. Package deps" → "4. Create manifest"
- Narrator box: "The build does four things automatically"

#### Panel 3 (Bottom, 1/3 page)
**Scene**: JAR output, Nobita triumphant
**Image Description**:
- Camera angle: Eye level, celebratory
- Characters: Nobita holding a JAR file icon, smiling
- Environment: File explorer showing target/app.jar
- Lighting: Bright, success
- Color tone: Warm success, gold highlights

**Text Elements**:
- Speech bubble: "Done! One JAR file."
- File label: "app.jar"

**Visual Prompt**:
Ohmsha educational manga, 3-panel vertical layout, manga art style, neutral tone, 3:4 portrait. Panel 1: Nobita clicking "Build" in IDE with Maven package visible. Panel 2: Four sequential build step visual metaphors arranged horizontally: Compile Machine, Resource Porter, Dependency Bundler, Manifest Writer. Panel 3: Nobita holding JAR file icon triumphantly, file explorer showing target/app.jar. Clean manga lines, screen-tone effects for technical UI elements, educational manga style.

---

## Page 4 / 8

**Filename**: 04-page-baitpfv-jar-story.png  
**Layout**: Standard (3 panels)  
**Narrative Layer**: Mirror / Contrast  
**Core Message**: IDE build vs command-line CI/CD — same result, different context

### Panel Layout

**Panel Count**: 3

#### Panel 1 (Top, 1/3 page)
**Scene**: IDE build path
**Image Description**:
- Camera angle: Eye level
- Characters: Nobita in IDE
- Environment: IDE interface, Maven/Gradle sidebar
- Lighting: Screen glow
- Color tone: Development-friendly

**Text Elements**:
- Narrator box: "IDE build: Easy, visual, manages dependencies for you"
- IDE label: "Click Build → .jar appears"

#### Panel 2 (Middle, 1/3 page)
**Scene**: Terminal/CI/CD path (split panel)
**Image Description**:
- Camera angle: Centered
- Characters: Abstract terminal cursor
- Environment: Dark terminal with green text, CI/CD server icon in cloud
- Lighting: Terminal green glow
- Color tone: Technical, automated

**Text Elements**:
- Narrator box: "Command line: Same logic, automated for production"
- Terminal label: "mvn clean package"

#### Panel 3 (Bottom, 1/3 page)
**Scene**: Both paths converge to same JAR
**Image Description**:
- Camera angle: Eye level
- Characters: Nobita and Doraemon
- Environment: Two paths from top panels converging into single JAR
- Lighting: Unified, clear
- Color tone: Harmony, completion

**Text Elements**:
- Speech bubble: "Two paths, same destination!"
- JAR label: "app.jar"

**Visual Prompt**:
Ohmsha educational manga, 3-panel vertical layout, manga art style, neutral tone, 3:4 portrait. Panel 1: Nobita in IDE clicking Build. Panel 2: Dark terminal with CI/CD cloud icon, green command-line text "mvn clean package". Panel 3: Nobita and Doraemon standing together, two paths from panels 1 and 2 converging into single glowing JAR file. Split/merge visual composition. Clean manga art, educational manga style.

---

## Page 5 / 8

**Filename**: 05-page-baitpfv-jar-story.png  
**Layout**: Tutorial / Mirror (expanded process)  
**Narrative Layer**: Mirror  
**Core Message**: Show the full deploy workflow from source to running container

### Panel Layout

**Panel Count**: 4 (vertical flow)

#### Panel 1 (Top, small)
**Scene**: Source code on laptop
**Image Description**:
- Camera angle: Over-shoulder view
- Characters: Nobita with laptop
- Environment: Source code visible
- Lighting: Screen glow
- Color tone: Starting point

**Text Elements**:
- Label: "Source code"
- Arrow: "Build ↓" pointing to next panel

#### Panel 2 (Small)
**Scene**: JAR file produced
**Image Description**:
- Camera angle: Centered
- Characters: Doraemon holding JAR
- Environment: Clean background with file icon
- Lighting: Bright
- Color tone: Transformation

**Text Elements**:
- Label: "JAR"
- Arrow: "Copy ↓" pointing to next panel

#### Panel 3 (Small)
**Scene**: scp/SSH transmission
**Image Description**:
- Camera angle: Conceptual flow
- Characters: None
- Environment: Laptop on left, server on right, data stream between
- Lighting: Network transmission visual
- Color tone: Data flow

**Text Elements**:
- Label: "SCP → WEB-IWP"
- Arrow: "Docker ↓" pointing to next panel

#### Panel 4 (Bottom, large)
**Scene**: Running container, success
**Image Description**:
- Camera angle: Eye level, celebratory
- Characters: Nobita and Doraemon high-five
- Environment: Server room, running container visualization, green "UP" status light
- Lighting: Success green glow
- Color tone: Victory

**Text Elements**:
- Speech bubble: "Running! http://10.255.255.6:19002/login"
- Status: "docker ps → UP"

**Visual Prompt**:
Ohmsha educational manga, 4-panel vertical workflow diagram style, manga art style, neutral tone, 3:4 portrait. Panel 1: Nobita laptop with source code, arrow "Build ↓". Panel 2: Doraemon holding JAR, arrow "Copy ↓". Panel 3: Data stream from laptop to server with label "SCP → WEB-IWP", arrow "Docker ↓". Panel 4: Nobita and Doraemon high-five in front of server with green "UP" status light, speech bubble "Running!". Clean manga art, clear workflow arrows, educational manga style.

---

## Page 6 / 8

**Filename**: 06-page-baitpfv-jar-story.png  
**Layout**: Standard (3 panels)  
**Narrative Layer**: Challenge / Problem  
**Core Message**: What goes wrong if you skip the build step?

### Panel Layout

**Panel Count**: 3

#### Panel 1 (Top, 1/3 page)
**Scene**: Nobita tries to skip build, copies source directly
**Image Description**:
- Camera angle: Eye level
- Characters: Nobita confident, waving
- Environment: File manager, dragging .java files to server folder
- Lighting: Overconfident
- Color tone: Hubris, risky

**Text Elements**:
- Speech bubble: "Why build? I'll just copy the .java files!"

#### Panel 2 (Middle, 1/3 page)
**Scene**: Error Monster attack, chaos
**Image Description**:
- Camera angle: Dynamic low angle
- Characters: Error Monster huge, attacking, wrapping Nobita in code-tentacles
- Environment: Server room, alarms flashing, server lights red
- Lighting: Red emergency lighting
- Color tone: Chaos, failure

**Text Elements**:
- Sound effect (bold): "CRASH!"
- Multiple error texts floating: "Compile error!", "Missing dependencies!", "No manifest!"

#### Panel 3 (Bottom, 1/3 page)
**Scene**: Nobita defeated, Doraemon explaining
**Image Description**:
- Camera angle: Eye level, lesson moment
- Characters: Nobita on floor exhausted; Doraemon standing, explaining with simple diagram
- Environment: Messy server room
- Lighting: Soft, learning moment
- Color tone: Defeated but educational

**Text Elements**:
- Speech bubble: "The server needs compiled code, bundled dependencies, and a manifest... all in one file."
- List bubble: "❌ No bytecode, ❌ no bundled libs, ❌ no manifest = instant death"

**Visual Prompt**:
Ohmsha educational manga, 3-panel vertical layout, manga art style, neutral tone, 3:4 portrait. Panel 1: Nobita confidently dragging .java files in file manager. Panel 2: Massive Error Monster (red tangled code-text with glowing eyes) attacking, wrapping Nobita in code tentacles, server room with red alarm lights, bold "CRASH!" sound effect. Panel 3: Nobita defeated on floor, Doraemon pointing to simple diagram of "Server needs: bytecode + libs + manifest". Clean manga art, expressive failure comedy, educational manga style.

---

## Page 7 / 8

**Filename**: 07-page-baitpfv-jar-story.png  
**Layout**: Standard (2 large panels + footer)  
**Narrative Layer**: Tutorial / Mirror  
**Core Message**: Show what's actually in the server container

### Panel Layout

**Panel Count**: 2 large + 1 footer strip

#### Panel 1 (Top, 2/3 page)
**Scene**: Docker container cross-section
**Image Description**:
- Camera angle: Cutaway view
- Characters: Doraemon as tour guide
- Environment: Transparent Docker container showing layers: OS → JRE → app.jar
- Lighting: Technical cross-section lighting
- Color tone: Educational diagram, clean

**Text Elements**:
- Layer labels: "openjdk:21-jdk" (bottom), "app.jar" (top, glowing)
- Narrator box: "Docker container needs a packaged app, not raw source"
- Doraemon speech: "The container mounts your JAR into a JRE image!"

#### Panel 2 (Footer strip)
**Scene**: docker run command
**Image Description**:
- Camera angle: Terminal-like
- Characters: None
- Environment: Terminal showing docker run command
- Lighting: Terminal glow
- Color tone: Technical, instructional

**Text Elements**:
- Command box:
  docker run -d --name myapp -p 8080:8080 -v /app.jar:/app/app.jar openjdk:21-jdk java -jar /app/app.jar
- Callout: "One command. One file. Done."

**Visual Prompt**:
Ohmsha educational manga, 2-panel + footer layout, manga art style, neutral tone, 3:4 portrait. Top large panel: Doraemon pointing at cutaway Docker container cross-section showing layered architecture: openjdk:21-jdk base layer, mounted app.jar on top, glowing. Footer strip: terminal window displaying docker run command with callout "One command. One file. Done." Clean technical diagram integrated into manga, educational manga style.

---

## Page 8 / 8

**Filename**: 08-page-baitpfv-jar-story.png  
**Layout**: Standard (3 panels)  
**Narrative Layer**: Closure + callback  
**Core Message**: Resolution — the app runs, hero learns, callback to opening problem

### Panel Layout

**Panel Count**: 3

#### Panel 1 (Top, 1/3 page)
**Scene**: Browser success
**Image Description**:
- Camera angle: Screen view
- Characters: Nobita face in foreground, excited
- Environment: Browser showing login page at http://10.255.255.6:19002/login
- Lighting: Screen glow, success green
- Color tone: Success, warm

**Text Elements**:
- Speech bubble: "IT WORKS!"
- Browser address: "10.255.255.6:19002/login"

#### Panel 2 (Middle, 1/3 page)
**Scene**: Nobita and Doraemon celebrating
**Image Description**:
- Camera angle: Eye level
- Characters: Nobita and Doraemon high-five, Error Monster now tiny and friendly in background
- Environment: Clean success scene
- Lighting: Bright, warm
- Color tone: Victory, friendship

**Text Elements**:
- Narrator box: "The JAR made it all possible"

#### Panel 3 (Bottom, 1/3 page)
**Scene**: Summary / knowledge card
**Image Description**:
- Camera angle: Eye level, diagram style
- Characters: None
- Environment: Clean white background with flowchart boxes: Source → Build → JAR → SCP → Docker → RUNNING
- Lighting: Bright, instructional
- Color tone: Summary, reference

**Text Elements**:
- Key takeaways (bullet list):
  "Source cannot deploy directly"
  "JAR = compiled + bundled + manifest"
  "Build in IDE or CLI, both work"

**Visual Prompt**:
Ohmsha educational manga, 3-panel vertical layout, closing page, manga art style, neutral tone, 3:4 portrait. Panel 1: Nobita excited face reflected in laptop screen showing successful login page at 10.255.255.6:19002/login. Panel 2: Nobita and Doraemon high-five celebrate, tiny friendly Error Monster waving in background. Panel 3: Summary flowchart diagram on white background showing Source → Build → JAR → SCP → Docker → RUNNING with key takeaways. Clean manga art, triumphant resolution, educational manga style.

---

## Page Reference

| Page | Filename | Core Message |
|------|----------|--------------|
| Cover | 00-cover-baitpfv-jar-story.png | Deploy story setup |
| P1 | 01-page-baitpfv-jar-story.png | Source code won't run on server |
| P2 | 02-page-baitpfv-jar-story.png | JAR = packaged everything |
| P3 | 03-page-baitpfv-jar-story.png | IDE build does 4 steps |
| P4 | 04-page-baitpfv-jar-story.png | IDE vs CLI, same goal |
| P5 | 05-page-baitpfv-jar-story.png | Full workflow visual |
| P6 | 06-page-baitpfv-jar-story.png | Error Monster chaos if skip build |
| P7 | 07-page-baitpfv-jar-story.png | Docker container needs JAR |
| P8 | 08-page-baitpfv-jar-story.png | Success + knowledge summary |
