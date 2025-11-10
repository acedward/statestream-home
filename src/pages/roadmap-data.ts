export const roadmap = `
PE-17 - Production Deployment Tools
  PE-16 - Production Deployment (Docs + Test + Changes)
  PE-19 - Real OTel Stack [dup]
PE-37 - Remove Patch.sh & check.sh
  PE-1 - Patch fetch-block/from.js 
  PE-30 - [EXT] Deno Hardhat (Ignition) 3 Support https://github.com/NomicFoundation/hardhat/issues/7473
  PE-184 - check.sh dependencies: deno, node, compact, forge, tmux, dkill, curl, ss/lsof
PE-41 - Effectstream Core V2 Improvements
  PE-10 - Scheduled blocks and timed block should be sorted by ID before running
  PE-20 - Implement missing RPC (eip1193.ts) endpoints
  PE-50 - Database Snapshots (auto generate and restore on demand)
  PE-55 - Main STF loop: Crash on exceptions, except DB errors should roll back
  PE-56 - https://github.com/PaimaStudios/paima-engine/pull/450
  PE-62 - [EXT] NTP client issues with deno https://github.com/buffcode/ntp-time-sync/issues/104
  PE-114 - Add support for Pub/Sub @ STF
  PE-182 - Add db table for sync protocol block debugging
PE-42 - EVM Support
  PE-147 - Read config from fromHardhat: '/myconfig.hardhat',
  PE-183 - Move common scripts to @effectstream/evm
PE-43 - Midnight Support
  PE-3 - Update Midnight Contract Infrastructure
  PE-40 - [EXT] Midnight: Indexer Crash Blockheight
  PE-52 - Update Compact Tooling (use midnight node tools)
  PE-58 - indexer URLs should be defined in config (add default values)
  PE-120 - Migrate Support Scripts for Midnight Compilation to @effectstream/midnight-tools
  PE-160 - Move convert-js.ts into @effectstream/midnight-tools
  PE-165 - Bug: Random "Unexpected length of input" reading ledger
PE-44 - Cardano Support
  PE-18 - Sync Cardano
  PE-29 - [EXT] Yaci Devkit: Linux error: Text file busy (os error 26)
  PE-33 - [EXT] Fix issue with yaci devkit osx (rosseta patch)
  PE-168 - [EXT] Dolos 1.0.0 Beta Crash https://github.com/txpipe/dolos/issues/774
  PE-178 - tx3 integration
PE-45 - Avail Support
  PE-132 - Fix Avail for Linux
PE-46 - Effectstream Explorer V1
  PE-28 - Make Explorer Responsive
  PE-36 - [EXT] Vite/esbuild stuck at first launch PE-84 (dup)
  PE-116 - Support for large tables
  PE-118 - Update Explorer to use Wallets + Local Wallets for Batcher
  PE-140 - explorer: cannot disable all tables
  PE-141 - explorer: average block time is not correct
  PE-142 - explorer: not all blocks are displayed
PE-47 - Documentation
  PE-175 - Improve Process Orchestrator (with expected task names)
  PE-185 - Update 'what is effectstream' some outdated references and concepts
  PE-186 - Implement Log Section (depends on otel)
  PE-187 - Versioning & Productions docs
  PE-188 - In docs move game example into templates or remove
  PE-189 - Docs CICD
PE-48 - Effectstream Engine V2 Tooling & DevOps Improvements
  PE-25 - JSR Package cleanup when "import with  type: text " is available (PE-84)
  PE-84 - esbuild hangup @ macos https://github.com/evanw/esbuild/issues/4260
  PE-97 - deno JSR with  type: text  support https://github.com/denoland/deno/issues/29904
  PE-98 - implement check.sh requirements into the engine [dup]
  PE-102 - When publishing @effectstream/db update assets (until with type:text is supported by JSR)
  PE-124 - Connect ENV variables or configuration of urls/ports across code & scrips (replacing hardcoded values)
  PE-138 - Minimal version of deno 2.5.4 is required [This check is required for remoteAddr].
  PE-144 - Check Dependencies: https://github.com/PaimaStudios/paima-engine/security/dependabot
  PE-145 - Template init: deno init @package/scope init
  PE-146 - make startup dev default (simplify)
  PE-148 - Remove the start script. Use only localconfig
  PE-159 - fix log files folders created for backups
  PE-162 - Some system crashes are not shown though the new TUI logs
  PE-163 - TUI when launched, sometimes does not resize to full actual width (and uses default min)
  PE-166 - zkir is not working on docker with mac host (Compiling 7 circuits: Exception: zkir returned a non-zero exit status -4)
  PE-169 - OTEL: Clean up console.logs at @effectstream packages. Optionally send telemetry data per-process. Orchestrator pushes logs to TUI.
  PE-170 - OTEL: Setup Logger Files (e.g., as Loki)
  PE-174 - Overide Orchestrator default expected task scripts names
  PE-176 - CI CD for templates
PE-64 - Effectstream V2 Web - SDK
  PE-104 - Dynamic loading of wallet dependencies
  PE-106 - Wallets : Type Check sendTransaction to match Grammar
  PE-107 - Wallets : Clean up "Deno" usage from packages
  PE-108 - Wallets : Support for custom/alternative batchers
  PE-109 - Wallets : No polkadot or algorand working wallets (?)
  PE-110 - Wallets : Add Midnight Lace
  PE-111 - Wallets : Add Local Wallet
  PE-112 - Replace Ethers with Viem
  PE-113 - Add & Support Namespace/AppName in signatures
  PE-121 - Add support for selecting/change chain for EVM Wallets
  PE-172 - Better support for Deno Vite 
  PE-173 - Update template node esbuild to typescript
PE-67 - Templates & Examples Migration
  PE-69 - Migrate Farcaster Frame
  PE-70 - Migrate Gamemaker [gamemaker sdk]
  PE-71 - Migrate Generic [unity sdk]
  PE-72 - Migrate Hex Battle [webpack html5]
  PE-73 - Migrate Mina
  PE-74 - Migrate NFT LvLUP [vite react ethers typechain wagmi primitives]
  PE-75 - Migrate Open World [html]
  PE-76 - Migrate Paima Dice [webpack react ethers typechain]
  PE-77 - Migrate Rock Paper Scissors [webpack phaser]
  PE-78 - Migrate Trading Cards [webpack react viem primitives]
  PE-79 - Migrate Web 2.5 [vite react]
  PE-143 - Template: EVM - Midnight Token ERC1155 Transfer
  PE-177 - Midnight/EVM Localwallet stopped working "Details: Unknown account 0xF83C3d894bD0c250a466bE599d46104fe11919AB"
PE-149 - Blockchain Intents
PE-152 - Bitcoin Support
  PE-153 - Bitcoin Config & Read Data
  PE-154 - Bitcoin Local Infrastructure
  PE-155 - Bitcoin Generic Primitive
  PE-157 - Bitcoin e2e test
PE-190 - Landing
  PE-191 - CICD for landing
  PE-192 - Make Landing responsive (does not work correctly on phones)
  PE-193 - Connect color boxes with documentation
`;