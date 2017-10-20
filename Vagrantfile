VAGRANTFILE_API_VERSION = "2"

host_path = "../catalog_of_albums"
vm_path = "/home/vagrant/catalog_of_albums"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|

    config.vm.define "django" do |django|
        django.vm.box = "ubuntu/xenial64"
        django.vm.network :private_network, ip: "192.168.33.33"
        django.vm.network "forwarded_port", guest: 8000, host: 8000
        django.vm.synced_folder host_path, vm_path
    end

end