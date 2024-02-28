// Include the `napi_build` crate to use its functionality for setting up N-API.
extern crate napi_build;

fn main() {
    // Instruct Cargo to rerun this build script if "build.rs" itself changes.
    // This ensures that updates to the build configuration are automatically
    // acknowledged and applied in subsequent builds.
    println!("cargo:rerun-if-changed=build.rs");

    // Retrieve the target architecture for which the code is being compiled.
    // This information can be useful for conditional compilation based on the
    // target platform (e.g., Windows, macOS, Linux).
    let target = std::env::var("TARGET").unwrap();

    // Pass the target architecture as an environment variable to the Rust compiler.
    // This makes the `TARGET` variable accessible in your Rust code, allowing for
    // platform-specific logic or optimizations.
    println!("cargo:rustc-env=TARGET={target}");
    
    // Execute the setup function provided by the `napi_build` crate. This function
    // performs necessary configuration for the Rust project to interact with the
    // Node.js N-API, ensuring that the native module is correctly set up for building.
    // It's a crucial step for projects intending to extend Node.js with Rust-written
    // native modules.
    napi_build::setup();
}