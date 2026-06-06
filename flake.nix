{
  description = "flake";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-26.05";
  };

  outputs = { self, nixpkgs, ... }: 
  let 
    system = "x86_64-linux";
    pkgs = import nixpkgs { inherit system; };
  in {
    devShells.${system}.default = pkgs.mkShell {
      buildInputs = with pkgs; [
        nodejs_26
      ];

      shellHook = ''
        export NPM_CONFIG_PREFIX=$PWD/.npm-global
        export PATH=$PWD/.npm-global/bin:$PATH
        
        if [ ! -d ".npm-global" ] ; then
          npm install -g @angular/cli@22
          npm install
        fi

        exec fish -C 'function fish_prompt
          set_color cyan
          echo -n (whoami)
          
          set_color white
          echo -n "@"
          
          set_color blue
          echo -n "learn-the-fretboard "
          
          set_color yellow
          echo -n (prompt_pwd)
          
          set_color white
          echo "> "
        end'
      '';
    };

  };
}
