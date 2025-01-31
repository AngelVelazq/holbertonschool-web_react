/******/ (() => { // webpackBootstrap
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
function printTeacher(firstName, lastName) {
    return firstName[0] + ". " + lastName;
}
// Example usage:
var teacherName = printTeacher("John", "Doe");
console.log(teacherName); // Output: J. Doe
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFhQSxTQUFTLFlBQVksQ0FBQyxTQUFpQixFQUFFLFFBQWdCO0lBQ3JELE9BQVUsU0FBUyxDQUFDLENBQUMsQ0FBQyxVQUFLLFFBQVUsQ0FBQztBQUMxQyxDQUFDO0FBTUQsaUJBQWlCO0FBQ2pCLElBQU0sV0FBVyxHQUFHLFlBQVksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLGlCQUFpQjtBQVczQztJQUlJLHNCQUFZLFNBQWlCLEVBQUUsUUFBZ0I7UUFDM0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDN0IsQ0FBQztJQUVELHFDQUFjLEdBQWQ7UUFDSSxPQUFPLG1CQUFtQixDQUFDO0lBQy9CLENBQUM7SUFFRCxrQ0FBVyxHQUFYO1FBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFDTCxtQkFBQztBQUFELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIFRlYWNoZXIge1xuICAgIHJlYWRvbmx5IGZpcnN0TmFtZTogc3RyaW5nO1xuICAgIHJlYWRvbmx5IGxhc3ROYW1lOiBzdHJpbmc7XG4gICAgZnVsbFRpbWVFbXBsb3llZTogYm9vbGVhbjtcbiAgICB5ZWFyc09mRXhwZXJpZW5jZT86IG51bWJlcjtcbiAgICBsb2NhdGlvbjogc3RyaW5nO1xuICAgIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuaW50ZXJmYWNlIERpcmVjdG9ycyBleHRlbmRzIFRlYWNoZXIge1xuICAgIG51bWJlck9mUmVwb3J0czogbnVtYmVyO1xufVxuXG5mdW5jdGlvbiBwcmludFRlYWNoZXIoZmlyc3ROYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHtmaXJzdE5hbWVbMF19LiAke2xhc3ROYW1lfWA7XG59XG5cbmludGVyZmFjZSBwcmludFRlYWNoZXJGdW5jdGlvbiB7XG4gICAgKGZpcnN0TmFtZTogc3RyaW5nLCBsYXN0TmFtZTogc3RyaW5nKTogc3RyaW5nO1xufVxuXG4vLyBFeGFtcGxlIHVzYWdlOlxuY29uc3QgdGVhY2hlck5hbWUgPSBwcmludFRlYWNoZXIoXCJKb2huXCIsIFwiRG9lXCIpO1xuY29uc29sZS5sb2codGVhY2hlck5hbWUpOyAvLyBPdXRwdXQ6IEouIERvZVxuXG5pbnRlcmZhY2UgU3R1ZGVudENvbnN0cnVjdG9yIHtcbiAgICBuZXcgKGZpcnN0TmFtZTogc3RyaW5nLCBsYXN0TmFtZTogc3RyaW5nKTogU3R1ZGVudENsYXNzO1xufVxuXG5pbnRlcmZhY2UgU3R1ZGVudENsYXNzSW50ZXJmYWNlIHtcbiAgICB3b3JrT25Ib21ld29yaygpOiBzdHJpbmc7XG4gICAgZGlzcGxheU5hbWUoKTogc3RyaW5nO1xufVxuXG5jbGFzcyBTdHVkZW50Q2xhc3MgaW1wbGVtZW50cyBTdHVkZW50Q2xhc3NJbnRlcmZhY2Uge1xuICAgIHByaXZhdGUgZmlyc3ROYW1lOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBsYXN0TmFtZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZmlyc3ROYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5maXJzdE5hbWUgPSBmaXJzdE5hbWU7XG4gICAgICAgIHRoaXMubGFzdE5hbWUgPSBsYXN0TmFtZTtcbiAgICB9XG5cbiAgICB3b3JrT25Ib21ld29yaygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0N1cnJlbnRseSB3b3JraW5nJztcbiAgICB9XG5cbiAgICBkaXNwbGF5TmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5maXJzdE5hbWU7XG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==