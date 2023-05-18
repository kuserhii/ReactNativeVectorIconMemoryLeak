//
//  ViewController.swift
//  TestReactNativeVectorIcons
//
//  Created by Serhii Kushnir on 18.05.2023.
//

import UIKit

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
    }

    @IBAction func openAppClicked(_ sender: Any) {
        let storyboard = UIStoryboard(name: "Main", bundle: nil)
        let vc = storyboard.instantiateViewController(withIdentifier: "ReactContainer")
        self.present(vc, animated: true)
    }

}

