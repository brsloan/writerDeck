# writerDeck.org

Helping writers escape the thrall of technology by selectively giving in to it.

![banner of different writerdecks](/images/banner.jpg)

## What is a writerDeck?

A writerDeck is a device dedicated specifically and solely to writing. Technically, a typewriter is an analog writerDeck. But usually we mean some sort of computerized word processor, such as the [Astrohaus Freewrite](https://getfreewrite.com/products/freewrite-smart-typewriter-3rd-gen) or the [Alphasmart Neo](https://duckduckgo.com/?q=alphasmart+neo&t=h_&iax=images&ia=images), to name two of the most popular mass-produced versions. But these tend to be either too expensive or too limited for many writers, so many of us build our own.

The term "writerDeck" comes from "[cyberDeck](https://www.reddit.com/r/cyberDeck/)". People argue over what counts as a cyberDeck, but in practice it basically means "a weird cobbled together computer, usually without a mouse and usually homemade, often with a retro-futuristic, cyberpunk vibe." So a writerDeck is just a cyberDeck dedicated to writing.

## Why would anyone want one? Why not just use a computer?

One major reason is distraction. If your writing machine is also your video watching machine, you may find it difficult to get much writing done. When you use a writerDeck, you can only do one thing: write.

A second reason is pleasure. If a significant focus of your life is on writing, and much of your day is spent writing, then having a beautiful, dedicated device for doing it is very nice!

A third reason is because they are fun to design and build.

## What writerDecks are available for purchase?

Please see the [list of commercial writerDecks](list-of-commercial-writerdecks.md) for mass-produced offerings.

There are also people willing to build you a custom writerDeck for a fee, such as Keegan McNamara of [Mythic Computer Co.](https://www.mythic.computer/)

## What are some examples of writerDecks people have made themselves?

Check out the [list of DIY writerDecks](list-of-diy-writerdecks.md).

## Why wouldn't I just use my phone/tablet and a bluetooth keyboard?

Many people do just that! The only downsides might be if you have other distracting apps (which you can always remove) and that you might have to juggle multiple devices (unless you attach them somehow). Here is a list of the many approaches people have taken with [phone/tablet writerDecks](list-of-tablet-writerdecks.md).

## How do I make a writerDeck? Is it hard?

It's actually pretty easy! Unless you aren't very good with computers, or don't have the patience to Google things and figure them out. But basically you just need...

- A computer
  - A popular option is a [Raspberry PI](https://www.raspberrypi.org/), but you could just buy a miniPC or even use a desktop computer or laptop.
- A screen
  - There are many built specifically [for the Raspberry Pi](https://www.pishop.us/product/official-raspberry-pi-7-touch-screen-display-with-10-finger-capacitive-touch/), but you can also just use a normal computer monitor.
- A keyboard
  - Even if you're building a fancy custom writerDeck, you can still just buy a keyboard and build around it
- Some way to connect them all together
  - This is where you can really get creative. Lots of people 3D print cases, but you can also use wood, metal, found objects--anything at all!
- Software to run on it, which generally breaks down to:
  - **Operating System:** Usually some flavor of Linux, since it is free and stable. Raspberry Pi has its own OS, or you can use Ubuntu or anything really. I like to use a command line OS with no desktop like Raspberry Pi Lite because it feels much more like a dedicated device that way. You can set it up so when you turn it on it boots directly into your writing program without ever seeing a desktop, and then there is no possibility of getting distracted opening Firefox or whatever, because there is no Firefox! [Here is a quick breakdown](creating-single-app-devices.md) of the software stack I use to run my [WareWoolf Alpha writerDeck](https://www.reddit.com/r/writerDeck/comments/vcfbrq/finished_my_warewoolf_writerdeck_a_singlepurpose/) on a Raspberry Pi 4.
  - **Writing Program:** You can run writerDeck-specific software designed to give you control over file management, wi-fi, etc., without other programs, such as [WareWoolf](https://github.com/brsloan/warewoolf) or [ZeroWriter](https://github.com/zerowriter/zerowriter1/tree/main), or general writing software such as [FocusWriter](https://gottcode.org/focuswriter/), [WordGrinder](http://cowlark.com/wordgrinder/index.html), or even your own custom code--this can be as simple or as complicated as you like. See the [software page](writerdeck-software.md).

Does all that sound overwhelming to you, or painfully obvious? If the latter, you can do this no problem. If the former, you may need to take some time reading through Raspberry Pi and CyberDeck introductions and searching for basic tutorials for similar projects. Any kind of Raspberry Pi project will get you acquainted with the fundamentals, and then it's just a matter of tinkering.

## WriterDeck Friendly Software

Two free, open source projects dedicated specifically to writerDecks are [WareWoolf](https://github.com/brsloan/warewoolf) and [ZeroWriter](https://github.com/zerowriter/zerowriter1/tree/main), but there are many other options as well. Please see the [software page](writerdeck-software.md).

## WriterDeck Tutorials

* [Creating Single-App Distraction-Free Devices](creating-single-app-devices.md)
* [ZeroWriter Build Guide](https://github.com/zerowriter/zerowriter1)

## Related Tutorials

* [Penkesu Pocket Computer](https://github.com/penk/penkesu)
* [Lisperati](https://github.com/drcode/lisperati-1000-diy)
* [Framedeck](https://github.com/brickbots/framedeck/)
* [Mainboard Terminal](https://github.com/penk/MainboardTerminal)
* [Chonky Palmtop](https://gitlab.com/norris.daniel/chonky-palmtop)

### Where can I get more info?

There is an active community on Reddit at [r/writerDeck](https://www.reddit.com/r/writerDeck/).

There are also subreddits for specific projects such as [r/ZeroWriter](https://www.reddit.com/r/zerowriter/), which focuses on using the ZeroWriter software to build e-ink writerDecks.

#### Credit For Banner Images

* [Compass Set Deck](https://www.reddit.com/r/writerDeck/comments/11y4wpx/update/) by /u/DreamingInDarkness
* [Muse](https://www.reddit.com/r/writerDeck/comments/13l0zmx/finally_finished_my_writerdeck_i_call_it_the_muse/) by /u/ThisIsTheNewSleeve
* [WareWoolf Alpha](https://benjaminsloan.com/2022/06/14/warewoolf-alpha-a-single-purpose-writing-device-i-built/) by Benjamin Sloan
* [Mythic I](https://www.reddit.com/r/writerDeck/comments/125wqf4/i_wanted_a_beautiful_computer_and_couldnt_find/) by Keegan McNamara