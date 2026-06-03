# Why Build a JAR File Before Deploying?

## The Simple Answer

You build a JAR because **Docker needs a packaged app**, not raw source code. The JAR is your app in a form that Java can actually run on the server.

## What is a JAR?

- JAR = **Java ARchive**
- It’s like a **ZIP file** containing:
  - Your compiled code (`.class` files)
  - Dependencies (libraries like Spring Boot)
  - Resources (configs, static files)
  - A special manifest telling Java how to run it

## Why Not Just Copy Source Code?

**Source code** is what YOU write:
```java
@RestController
public class TaxController {
    @GetMapping("/summary")
    public Summary getSummary() { ... }
}
```

The server **cannot run this directly**. It needs to be:
1. Compiled (translated to bytecode)
2. Packaged with dependencies
3. Given a startup entry point

That’s what the JAR does.

## What Happens During "Build JAR"

**In your IDE (IntelliJ/Eclipse/VS Code):**

1. **Compile** — Java source → bytecode (`.class` files)
2. **Process resources** — copy `application.properties`, templates, static files
3. **Package dependencies** — bundle Spring Boot, Jackson, everything into one file
4. **Create manifest** — write `Main-Class: org.springframework.boot.loader.JarLauncher`
5. **Output** — single file like `pre-filing-backend-support-web-1.0.0.jar`

**Result:** One file you can run with:
```bash
java -jar app.jar
```

## Why IDE Build vs Command Line?

**IDE build (what you do now):**
- Click "Build" or `mvn package` / `gradle build` in your IDE
- IDE manages classpath, plugins, and resources automatically
- Good for development and quick iterations

**Command line build (what CI/CD would do):**
- Run `mvn clean package` or `gradle bootJar`
- Same result, but automated for production
- We’re using IDE build now because you’re learning

## How This Fits YOUR Deploy Workflow

```
Your IDE
  ↓ Build
target/*.jar or build/libs/*.jar
  ↓ scp (copy)
WEB-IWP:/home/dkweb/deploy/app.jar
  ↓ docker run
Container running your app on port 8080
  ↓ Verify
http://10.255.255.6:19002/login
```

## What If You Don’t Build?

If you try to deploy without building:
- ❌ Server won’t have compiled bytecode
- ❌ Dependencies won’t be bundled
- ❌ No manifest = Java doesn’t know how to start it
- ❌ Docker container will fail instantly

## Real Example From Your Project

Your `pom.xml` shows:
```xml
<packaging>jar</packaging>
<parent>
    <groupId>kh.gov.tax.boot</groupId>
    <artifactId>gdt-boot-parent</artifactId>
    <version>2.0.0</version>
</parent>
```

This means:
- Your project is configured to produce a **JAR**, not a WAR
- Spring Boot parent manages the build process
- `mvn package` or IDE build will create: `pre-filing-backend-support-web-1.0.0.jar`

## Summary

| Question | Answer |
|----------|--------|
| Why JAR? | Single runnable file containing everything |
| Why build in IDE? | Easy, visual, manages dependencies |
| Why not source code? | Server needs compiled bytecode + bundled deps |
| What does build do? | Compile → Package → Create manifest → Output JAR |
| What does `java -jar` do? | Runs the JAR using the manifest entry point |

## Related

- [[ssh-and-docker-for-web-iwp]]
- [[webui-dev-deploy-runbook]]
- [[gdt-prefilling-backend-pom.xml]]
