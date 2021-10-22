class Software {
  #name;
  constructor(n) {
    this.#name = n;
  }
  run() {
    console.log(`${this.#name} is running. `);
  }
}

let s1 = new Software('AVG Antivirus');
s1.run();

class Plugin {
  #name;
  #version;
  constructor(n, v) {
    this.#name = n;
    this.#version = v;
  }
  install() {
    console.log(
      `Successfully installed plugin "${this.#name}" ver. ${this.#version}.`
    );
  }
  load() {
    console.log(
      `Plugin "${this.#name}" ver. ${this.#version}. loaded successfully.`
    );
  }
}

let p1 = new Plugin('Generic Toolbar 3', '3.2.1');
p1.install();
p1.load();

class Browser extends Software {
  #plugins;
  constructor(n) {
    super(n);
    this.#plugins = [];
  }
  installPlugin(plugin) {
    this.#plugins.push(plugin);
    plugin.install();
  }
  run() {
    super.run();
    for (let pl of this.#plugins) pl.load();
    console.log(`Browsing the Web...`);
  }
}

let b1 = new Browser('Google Chrome');
b1.installPlugin(p1);
b1.run();
