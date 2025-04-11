# WriterDeck Friendly Software

## Written Specifically for WriterDecks

- [WareWoolf](https://github.com/brsloan/warewoolf/wiki)
   - Free, open source software specifically for use in writerDecks for writing (and editing) novels.
   - Advantages: Designed to work well without mouse, self-email drafts function, built-in file manager, minimalist design, I wrote it...
   - Disadvantages: A graphical program written in Electron, so more resource hungry than terminal-based alternatives
- [Zerowriter](https://github.com/zerowriter/zerowriter1/tree/main)
   - Free, open source software for use with e-ink, terminal-based devices.
   - Advantages: Terminal-based and written in python so not resource hungry. Now has built-in file browser, wi-fi control, etc.
   - Disadvantages: Haven't used it, but appears to be very simple/in the early stages.
- [TypeWryter](https://github.com/RyWhal/TypeWryter)
   - Free, open source software for e-ink, terminal-based writerDecks, based on Zerowriter.
   - Advantages: Has a built-in file browser for managing files remotely from another computer on the same network. Terminal-based and written in python so not resource hungry.
   - Disadvantages: not sure as I haven't used it, but it does not allow editing (only write and backspace).
- [Micro Journal](https://github.com/unkyulee/micro-journal)
   - Free, open source software written to run on an ESP32 microprocessor.
   - Advantages: ESP32 makes for an instant-on, low-power device similar to the Alphasmart Neo, as opposed to anything running Linux on a Raspberry Pi, which needs to boot up a whole operating system before opening your application.
   - Disadvantages: have not yested yet, but likely has fewer features than an OS-based application (which is, of course, not necessarily a disadvantage).
- [Tinker WriterDeck](https://tinker.sh/)
   - Not a writing application, but a Linux distro packaged specifically to turn laptops into writerDecks. The writing app it uses is [Tilde](https://os.ghalkes.nl/tilde/).
   - Advantages: Easy for non-computer people to turn a laptop into an inexpensive writerDeck.
   - Disadvantages: Does not come with easy ways to self email drafts, use different writing programs, etc. (But that all can be customized--see their website.)

## Good for WriterDecks

### Terminal Based

- [WordGrinder](http://cowlark.com/wordgrinder/index.html)
   - This is a terminal-based word processor much like the old-school ones you might use in a DOS machine in the 80s/90s.
   - Advantages: Uses less resources than a graphical program, so better for low-powered devices like the Raspberry Pi Zero.
   - Disadvantages: It does not work well with Windows (but who is going to build a writerDeck with Windows?). Some people may not be comfortable working in a terminal.
- [FocusWriter](https://gottcode.org/focuswriter/)
   - This is a free distraction-free writing program available for Linux and Windows.
- [WordPerfect for Unix](https://github.com/taviso/wpunix)
   - This was a professionally produced word processing program from the Olden Days, and is very powerful while still running completely in the terminal. Some kind soul put together scripts/patches to make it run on Linux, making it perfect for a writerDeck.
   - Disadvantages: It is very complex and takes some learning. I am not sure how easily you can export a formatted document in a usable format. You can certainly export text files though.
- Basic terminal text editors like [Micro](https://micro-editor.github.io/), [Kilo](https://viewsourcecode.org/snaptoken/kilo/), [Vim](https://github.com/vim/vim),etc.
   - These all offer plain text writing within the terminal, and many people--especially programmers--swear by them.
   - Disadvantages: Esoteric controls, can't style italics/headings/etc., and may not allow you to indent with tabs (a deal breaker for me).


### Graphical

- [Scrivener For Linux](https://www.linux-apps.com/p/1673680/)
   - It's Scrivener! Legendary, wonderful, feature-packed. And the old, abandoned Linux version is free.
   - Disadvantages: it is old and not maintained. (Side-note: if you use it a lot, I encourage you to buy a license from them. They are good people making a great product!)
- [Word Tsar](http://wordtsar.ca/)
   - A modern port of a later version of WordStar that uses a graphical interface.
   - Disadvantages: an esoteric, old-timey interface.

### DOS Software To Run Through Emulator

- [WordStar 4](https://www.abandonwaredos.com/abandonware-game.php?abandonware=Wordstar+4&gid=2601#)
   - Another old-school terminal program from the 80s. This is another DOS program, so needs to be run through an emulator. This one is famous because it's what George R. R. Martin still uses to write his gigantic fantasy novels.
   - Disadvantages: Have to run through emulator, not sure how exporting to a usable modern format works. (Probably have to go through plain text?)
- [Carousel by Party Time! Hexcellent!](https://partytimehexcellent.itch.io/carousel)
   - This is a fun new app written for DOS (can be run with DOS emulators) that is oriented more toward diary writing, but with its keyboard-only design and retro look would make a great program for a journaling writerDeck.
   - Disadvantages: Does not lend itself to serious fiction writing, etc., as it does not allow you to edit documents beyond the last few paragraphs written.
