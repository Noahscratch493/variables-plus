class VariablesPlus {
    constructor(runtime) {
        this.runtime = runtime;
        this.variables = {};
        this.lists = {};
    }

    getInfo() {
        return {
            id: 'variablesplus',
            name: 'Variables+',
            color1: '#FFAB19',
            color2: '#E69A00',

            blocks: [

                // 🟡 Virtual Variables
                { blockType: Scratch.BlockType.LABEL, text: 'Virtual Variables' },

                {
                    opcode: 'createVar',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Create Virtual Variable [NAME]',
                    arguments: {
                        NAME: { type: Scratch.ArgumentType.STRING, defaultValue: 'myVar' }
                    }
                },
                {
                    opcode: 'setVar',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Set Virtual Variable [NAME] to [VALUE]',
                    arguments: {
                        NAME: { type: Scratch.ArgumentType.STRING },
                        VALUE: { type: Scratch.ArgumentType.STRING }
                    }
                },
                {
                    opcode: 'changeVar',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Change Virtual Variable [NAME] by [VALUE]',
                    arguments: {
                        NAME: { type: Scratch.ArgumentType.STRING },
                        VALUE: { type: Scratch.ArgumentType.NUMBER }
                    }
                },
                {
                    opcode: 'deleteVar',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Delete Virtual Variable [NAME]',
                    arguments: {
                        NAME: { type: Scratch.ArgumentType.STRING }
                    }
                },
                {
                    opcode: 'getVar',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '[NAME]',
                    arguments: {
                        NAME: { type: Scratch.ArgumentType.STRING }
                    }
                },

                "---",

                // 📋 Virtual Lists
                { blockType: Scratch.BlockType.LABEL, text: 'Virtual Lists' },

                {
                    opcode: 'createList',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Create Virtual List [NAME]',
                    arguments: {
                        NAME: { type: Scratch.ArgumentType.STRING, defaultValue: 'myList' }
                    }
                },
                {
                    opcode: 'addToList',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Add [VALUE] to [NAME]',
                    arguments: {
                        VALUE: { type: Scratch.ArgumentType.STRING },
                        NAME: { type: Scratch.ArgumentType.STRING }
                    }
                },
                {
                    opcode: 'deleteFromList',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Delete item [INDEX] of [NAME]',
                    arguments: {
                        INDEX: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },
                        NAME: { type: Scratch.ArgumentType.STRING }
                    }
                },
                {
                    opcode: 'getItem',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Item [INDEX] of [NAME]',
                    arguments: {
                        INDEX: { type: Scratch.ArgumentType.NUMBER },
                        NAME: { type: Scratch.ArgumentType.STRING }
                    }
                },
                {
                    opcode: 'listLength',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Length of [NAME]',
                    arguments: {
                        NAME: { type: Scratch.ArgumentType.STRING }
                    }
                },
                {
                    opcode: 'getList',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '[NAME]',
                    arguments: {
                        NAME: { type: Scratch.ArgumentType.STRING }
                    }
                },
                {
                    opcode: 'deleteList',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Delete Virtual List [NAME]',
                    arguments: {
                        NAME: { type: Scratch.ArgumentType.STRING }
                    }
                },

                "---",

                // 🧠 Logic & Checks
                { blockType: Scratch.BlockType.LABEL, text: 'Logic & Checks' },

                {
                    opcode: 'varExists',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: '[TYPE] Variable [NAME] exists?',
                    arguments: {
                        TYPE: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'varType',
                            defaultValue: 'Virtual'
                        },
                        NAME: { type: Scratch.ArgumentType.STRING }
                    }
                },
                {
                    opcode: 'varEquals',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: '[TYPE] Variable [NAME] = [VALUE]?',
                    arguments: {
                        TYPE: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'varType',
                            defaultValue: 'Virtual'
                        },
                        NAME: { type: Scratch.ArgumentType.STRING },
                        VALUE: { type: Scratch.ArgumentType.STRING }
                    }
                },
                {
                    opcode: 'listContains',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: '[TYPE] List [NAME] contains [VALUE]?',
                    arguments: {
                        TYPE: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'varType',
                            defaultValue: 'Virtual'
                        },
                        NAME: { type: Scratch.ArgumentType.STRING },
                        VALUE: { type: Scratch.ArgumentType.STRING }
                    }
                },

                "---",

                // 💾 Saves
                { blockType: Scratch.BlockType.LABEL, text: 'Saves' },

                {
                    opcode: 'setSave',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Set Save [ID] to [TEXT]',
                    arguments: {
                        ID: { type: Scratch.ArgumentType.STRING, defaultValue: '1' },
                        TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'Hello' }
                    }
                },
                {
                    opcode: 'getSave',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Load Save [ID]',
                    arguments: {
                        ID: { type: Scratch.ArgumentType.STRING, defaultValue: '1' }
                    }
                }
            ],

            menus: {
                varType: {
                    acceptReporters: true,
                    items: ['Virtual', 'Normal']
                }
            }
        };
    }

    // 🟡 Virtual Variables
    createVar(args) { this.variables[args.NAME] = 0; }

    setVar(args) {
        if (this.variables.hasOwnProperty(args.NAME)) {
            this.variables[args.NAME] = args.VALUE;
        }
    }

    changeVar(args) {
        if (this.variables.hasOwnProperty(args.NAME)) {
            this.variables[args.NAME] =
                (Number(this.variables[args.NAME]) || 0) + Number(args.VALUE);
        }
    }

    deleteVar(args) { delete this.variables[args.NAME]; }

    getVar(args) { return this.variables[args.NAME] ?? ''; }

    // 📋 Virtual Lists
    createList(args) { this.lists[args.NAME] = []; }

    addToList(args) {
        if (this.lists[args.NAME]) {
            this.lists[args.NAME].push(args.VALUE);
        }
    }

    deleteFromList(args) {
        if (this.lists[args.NAME]) {
            this.lists[args.NAME].splice(args.INDEX - 1, 1);
        }
    }

    getItem(args) {
        return this.lists[args.NAME]?.[args.INDEX - 1] ?? '';
    }

    listLength(args) {
        return this.lists[args.NAME]?.length ?? 0;
    }

    getList(args) {
        return this.lists[args.NAME]?.join(' ') ?? '';
    }

    deleteList(args) {
        delete this.lists[args.NAME];
    }

    // 🧠 Scratch variable helpers
    getScratchVar(name, util) {
        const targets = util.runtime.targets;

        for (let target of targets) {
            let vars = target.variables;
            for (let id in vars) {
                if (vars[id].name === name) {
                    return vars[id].value;
                }
            }
        }
        return undefined;
    }

    scratchVarExists(name, util) {
        return this.getScratchVar(name, util) !== undefined;
    }

    // 🧠 Logic
    varExists(args, util) {
        if (args.TYPE === 'Virtual') {
            return this.variables.hasOwnProperty(args.NAME);
        } else {
            return this.scratchVarExists(args.NAME, util);
        }
    }

    varEquals(args, util) {
        if (args.TYPE === 'Virtual') {
            return this.variables[args.NAME] == args.VALUE;
        } else {
            return this.getScratchVar(args.NAME, util) == args.VALUE;
        }
    }

    listContains(args, util) {
        if (args.TYPE === 'Virtual') {
            return this.lists[args.NAME]?.includes(args.VALUE) ?? false;
        } else {
            let list = this.getScratchVar(args.NAME, util);
            if (Array.isArray(list)) {
                return list.includes(args.VALUE);
            }
            return false;
        }
    }

    // 💾 Cookies
    setCookie(name, value) {
        document.cookie = name + "=" + encodeURIComponent(value) + "; path=/; max-age=31536000";
    }

    getCookie(name) {
        let cookies = document.cookie.split("; ");
        for (let c of cookies) {
            let [key, val] = c.split("=");
            if (key === name) return decodeURIComponent(val);
        }
        return "";
    }

    setSave(args) {
        this.setCookie("vp_save_" + args.ID, args.TEXT);
    }

    getSave(args) {
        return this.getCookie("vp_save_" + args.ID);
    }
}

Scratch.extensions.register(new VariablesPlus());
