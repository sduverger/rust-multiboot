var searchIndex = {};
searchIndex['multiboot'] = {"items":[[0,"","multiboot","Multiboot v1 library",null,null],[3,"Multiboot","","Multiboot struct clients mainly interact with\nTo create this use Multiboot::new()",null,null],[4,"MemType","","Types that define if the memory is usable or not.",null,null],[13,"RAM","","",0,null],[13,"Unusable","","",0,null],[6,"PAddr","","",null,null],[6,"VAddr","","",null,null],[17,"SIGNATURE_RAX","","Value found in %rax after multiboot jumps to our entry point.",null,null],[11,"eq","","",0,{"inputs":[{"name":"memtype"},{"name":"memtype"}],"output":{"name":"bool"}}],[11,"ne","","",0,{"inputs":[{"name":"memtype"},{"name":"memtype"}],"output":{"name":"bool"}}],[11,"fmt","","",0,{"inputs":[{"name":"memtype"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Initializes the multiboot structure.",1,null],[11,"has_memory_bounds","","If true, then the `mem_upper` and `mem_lower` fields are valid.",1,{"inputs":[{"name":"multiboot"}],"output":{"name":"bool"}}],[11,"has_boot_device","","If true, then the `boot_device` field is valid.",1,{"inputs":[{"name":"multiboot"}],"output":{"name":"bool"}}],[11,"has_cmdline","","If true, then the `cmdline` field is valid.",1,{"inputs":[{"name":"multiboot"}],"output":{"name":"bool"}}],[11,"has_modules","","If true, then the `mods_addr` and `mods_count` fields are valid.",1,{"inputs":[{"name":"multiboot"}],"output":{"name":"bool"}}],[11,"has_symbols","","If true, then the `syms` field is valid.",1,{"inputs":[{"name":"multiboot"}],"output":{"name":"bool"}}],[11,"has_memory_map","","If true, then the `mmap_addr` and `mmap_length` fields are valid.",1,{"inputs":[{"name":"multiboot"}],"output":{"name":"bool"}}],[11,"has_drives","","If true, then the `drives_addr` and `drives_length` fields are valid.",1,{"inputs":[{"name":"multiboot"}],"output":{"name":"bool"}}],[11,"has_config_table","","If true, then the `config_table` field is valid.",1,{"inputs":[{"name":"multiboot"}],"output":{"name":"bool"}}],[11,"has_boot_loader_name","","If true, then the `boot_loader_name` field is valid.",1,{"inputs":[{"name":"multiboot"}],"output":{"name":"bool"}}],[11,"has_apm_table","","If true, then the `apm_table` field is valid.",1,{"inputs":[{"name":"multiboot"}],"output":{"name":"bool"}}],[11,"has_vbe","","If true, then the `vbe_*` fields are valid.",1,{"inputs":[{"name":"multiboot"}],"output":{"name":"bool"}}],[11,"find_memory","","Discover all memory regions in the multiboot memory map.",1,{"inputs":[{"name":"multiboot"},{"name":"f"}],"output":null}],[11,"find_modules","","Discover all additional modules in multiboot.",1,{"inputs":[{"name":"multiboot"},{"name":"f"}],"output":null}]],"paths":[[4,"MemType"],[3,"Multiboot"]]};
initSearch(searchIndex);