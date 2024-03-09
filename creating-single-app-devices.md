Since I just ended a struggle to figure this out based on many partial posts/tutorials, I figured I'd put it all together in one spot for others. This is just **one way** of doing it, and a way I just learned, so I don't pretend to be an expert or to say it's the best way. I just say it worked or me.

I used this to convert a raspberry pi into a one-app device, but you could do the same thing with an old laptop. The idea is to have distraction-free access to a writing app without anything else accessible–no browser, no desktop, nothing. You should be able to do it with any app that runs on Linux, but I did it with my own writing app (which is still in development but mostly works), WareWoolf.

# The Basic Approach

**OS With No Desktop** \+ **Display Server** \+ **Window Manager** \+ **Your App** = a single-app device.

In my case, that means:

[Raspberry Pi OS Lite](https://www.raspberrypi.com/software/operating-systems/) \+ [Xorg ](https://wiki.archlinux.org/title/xorg)\+ [Matchbox ](https://en.wikipedia.org/wiki/Matchbox_(window_manager))\+ [WareWoolf](https://github.com/brsloan/warewoolf)

If you were converting a laptop, you could use something like [Arch Linux](https://archlinux.org/) or whatever flavor of Linux you like.

# The Steps

## 1. Install the OS.

With a Raspberry Pi, this is very easy using their [Imager](https://www.raspberrypi.com/news/raspberry-pi-imager-imaging-utility/). With a laptop, you’ll just have to follow the instructions for the OS you choose.

## 2. Configure The OS

For me, that meant turning on wifi and enabling SSH so I could modify my pi from another computer. For Raspbian, these are both done with [raspi-config](https://www.raspberrypi.com/documentation/computers/configuration.html).

## 3. Install Xorg

This should be pretty easy. For me:

    sudo apt-get install xorg

## 4. Install Matchbox

    sudo apt-get install matchbox-window-manager

## 5. Install your program

This may be as easy as “sudo apt-get install \[your app\]”, but since I was using my own and haven’t published it on any repositories or whatever I transferred the .deb file over SSH. Then installed it with the above command. This step may take a while because it will also install any dependencies, and with a minimalist no-desktop OS, there won’t be much already there.

## 6. Configure Xorg to Open Your App with Matchbox

Following [these ](https://wiki.archlinux.org/title/Xinit#Configuration)instructions, copy default config file for customization like so:

    cp /etc/X11/xinit/xinitrc ~/.xinitrc

Now edit the created file however you like (I use nano: “nano \~/.xinitrc”) to add this:

    matchbox-window-manager &
    pid=$!
    warewoolf
    kill pid 

The pid/kill pid stuff makes it so when you exit your application, X will exit too, taking you back to the command line. Otherwise your app would close and you’d be left with an empty black window. (Obviously you would replace "warewoolf" with the command to start whatever app you're using.)

Save the file and exit. You can now test your app with the command “startx”. It should open in its own solitary window in the void! No desktop! Hurray!

## 7. Configure the OS to start your app on boot

We can do this by editing the \~/.bash\_profile file:

    if [[ -z "$DISPLAY" ]] && [[ $(tty) = /dev/tty1 ]]; then
        exec startx
        logout
    fi

Save and reboot. Your app should open! Close the app to get back to the command line.

## 8. Edit Your Xorg Configuration To Make Your Device Shut Down When App Is Closed

If you’d like the computer to shut down when you exit the app instead of going back to command line, open up \~/.xinitrc like you did in step 6 and add one more line below “kill pid”:

    shutdown -h 0

Save and reboot. Your app will load! Exit the app. The computer shuts down! You’ve done it! (Maybe. Maybe some weird error popped up somewhere along the way and you can’t for the love of god figure it out. Welcome to tinkering with Linux.)

# Reminder That I’m Not An Expert

I may have forgotten things, though I don’t believe I have. Things may be different for other Linux distros. There may be far better ways. This may be unsecure or unstable in some way I don’t know about. I invite others to correct me or give their methods. But this worked for me.