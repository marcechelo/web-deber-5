import { Controller, Get, Post, Req, Res } from '@nestjs/common';

@Controller('Preguntas')
export class PreguntasFrecuentesController{

  pregunta = {
    pregunta: String,
    respuesta: String,
  };
  preguntas = [];

  @Post('PregunasFrecuentes')
  preguntasFrecuentes(@Req() request, @Res() response){

    const pregFrec = {
      pegrunta: request.query.pregunta,
      respuesta: request.query.respuesta,
    };

    this.preguntas.push(pregFrec);
    return response.send(pregFrec);
}

  @Get('PreguntasRead')
  mostrarPreguntas(@Req()request, @Res() response){

  }

}