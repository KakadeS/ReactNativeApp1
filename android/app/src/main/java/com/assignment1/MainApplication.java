package com.assignment1;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.RNFetchBlob.RNFetchBlobPackage;
import com.airbnb.android.react.maps.MapsPackage;
import com.brentvatne.react.ReactVideoPackage;
import com.rnfs.RNFSPackage;
import fr.bamlab.rnimageresizer.ImageResizerPackage;
import com.imagepicker.ImagePickerPackage;
import com.goldenowl.twittersignin.TwitterSigninPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.smixx.reactnativeicons.ReactNativeIcons;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.wix.RNCameraKit.RNCameraKitPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new RNFetchBlobPackage(),
            new MapsPackage(),
            new ReactVideoPackage(),
            new RNFSPackage(),
            new ImageResizerPackage(),
            new ImagePickerPackage(),
            new TwitterSigninPackage(),
            new RNCameraKitPackage(),
           // new RCTCameraPackage(),
            new VectorIconsPackage(),
            new ReactNativeIcons()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
