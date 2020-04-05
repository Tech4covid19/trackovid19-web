import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ShareHelper {
  facebook(link: string, quote?: string, hashtag?: string) {
    if (typeof FB !== 'undefined' && FB != null) {
      FB.ui(
        {
          display: 'popup',
          method: 'share',
          href: link,
          quote: quote || null,
          hashtag: (hashtag && `#${hashtag}`) || null,
        },
        response => {},
      );
    }
  }

  whatsapp(text: string) {
    const whatsappWindow = window.open(
      // docs => https://faq.whatsapp.com/en/general/26000030
      `https://wa.me/?text=${text}`,
    );
    if (whatsappWindow.focus) {
      whatsappWindow.focus();
    }
    return false;
  }

  facebookMessenger(text: string) {
    if (typeof FB !== 'undefined' && FB != null) {
      FB.ui(
        {
          method: 'send',
          link: `${text}`,
        },
        response => {},
      );
    }
  }

  linkedIn(url: string) {
    const linkedinWindow = window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      'height=350,width=600',
    );
    if (linkedinWindow.focus) {
      linkedinWindow.focus();
    }
    return false;
  }

  twitter(text: string, hashtag?: string) {
    const twitterWindow = window.open(
      `https://twitter.com/intent/tweet?via=covidografia&` + `text=${text}&hashtags=${hashtag}`,
      'height=350,width=600',
    );
    if (twitterWindow.focus) {
      twitterWindow.focus();
    }
    return false;
  }

  copyText(text: string) {
    const el = document.createElement('textarea');
    el.value = `${text}`;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
}
