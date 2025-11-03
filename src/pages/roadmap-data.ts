export const roadmap = `
PE-17 - Production Deployment Tools
  PE-16 - Production Deployment
  PE-19 - Real OTel Stack
PE-37 - Remove Patch.sh
  PE-1 - Patch fetch-block/from.js (where this comes from?)
  PE-30 - Deno Hardhat (Ignition) 3 Support https://github.com/NomicFoundation/hardhat/issues/7473
PE-41 - Effectstream Core V2 Improvements
  PE-10 - Scheduled blocks and timed block should be sorted by ID before running
  PE-20 - Implement missing RPC (eip1193.ts) endpoints
  PE-50 - Database Snapshots (auto generate and restore on demand)
  PE-55 - Main STF loop: Crash on exceptions, except DB errors should roll back
  PE-56 - https://github.com/PaimaStudios/paima-engine/pull/450
  PE-62 - ntp client issues with deno https://github.com/buffcode/ntp-time-sync/issues/104
  PE-114 - Add support for Pub/Sub @ STF
  PE-119 - Split @paima/utils ENV package into node / frontend packages.
  PE-136 - deno socket remoteAddress https://github.com/denoland/deno/issues/30707
PE-42 - EVM Support
  PE-147 - Read config from      fromHardhat: '/myconfig.hardhat',
  PE-156 - EVM Generic Primitive
PE-43 - Midnight Support
  PE-3 - Update Midnight Contract Infrastructure
  PE-40 - Midnight: Indexer Crash Blockheight
  PE-52 - Update Compact Tooling (use midnight node tools)
  PE-58 - indexer URLs should be defined in config (add default values)
  PE-120 - Migrate Support Scripts for Midnight Compilation to @paima/midnight-tools
  PE-160 - Move convert-js.ts into midnight internal package tools
  PE-161 - Generic Decoder for Midnight Ledger State
  PE-165 - Bug: Random "Unexpected length of input" reading ledger
PE-44 - Cardano Support
  PE-18 - Sync Cardano
  PE-29 - Yaci Devkit: Linux error: Text file busy (os error 26)
  PE-33 - Fix issue with yaci devkit osx (rosseta patch)
  PE-168 - Dolos 1.0.0 Beta Crash https://github.com/txpipe/dolos/issues/774
PE-45 - Avail Support
  PE-132 - Fix Avail for Linux
PE-46 - Effectstream Explorer V1
  PE-28 - Make Explorer Responsive
  PE-36 - Vite/esbuild stuck at first launch PE-84 (dup)
  PE-116 - Support for large tables
  PE-118 - Update Explorer to use Wallets + Local Wallets for Batcher
  PE-140 - explorer: cannot disable all tables
  PE-141 - explorer: average block time is not correct
  PE-142 - explorer: not all blocks are displayed
PE-47 - Documentation
  PE-6 - Implement What is Effectstream Interactive Video
PE-48 - Effectstream V2 Tooling & DevOps Improvements
  PE-25 - JSR Package cleanup when "import with  type: text " is available (PE-84)
  PE-84 - esbuild hangup @ macos https://github.com/evanw/esbuild/issues/4260
  PE-97 - deno JSR with  type: text  support https://github.com/denoland/deno/issues/29904
  PE-98 - implement check.sh requirements into the engine
  PE-102 - When publishing @paima/db update assets (until with type:text is supported by JSR)
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
  PE-169 - OTEL: Clean up console.logs at @paima packages. Optionally send telemetry data per-process. Orchestrator pushes logs to TUI.
  PE-170 - OTEL: Setup Logger Files (e.g., as Loki)
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
PE-67 - Templates & Examples Migration
  PE-69 - Migrate Farcaster Frame
  PE-70 - Migrate Gamemaker
  PE-71 - Migrate Generic
  PE-72 - Migrate Hex Battle
  PE-73 - Migrate Mina
  PE-74 - Migrate NFT LvLUP
  PE-75 - Migrate Open World
  PE-76 - Migrate Paima Dice
  PE-77 - Migrate Rock Paper Scissors
  PE-78 - Migrate Trading Cards
  PE-79 - Migrate Web 2.5
  PE-143 - Template: EVM - Midnight Token ERC1155 Transfer
PE-87 - OKRs
PE-126 - Partners & External Connections
PE-149 - Blockchain Intents
  PE-150 - Companies & Software that implement Intents
  PE-151 - Use Cases for Intents
PE-152 - Bitcoin Support
  PE-153 - Bitcoin Config & Read Data
  PE-154 - Bitcoin Local Infrastructure
  PE-155 - Bitcoin Generic Primitive
  PE-157 - Bitcoin e2e test
PE-171 - New Name for Paima Engine
`;